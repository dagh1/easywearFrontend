import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";

import Stats from "stats.js";
import jwtDecode from "jwt-decode";

function CalculateSize(props) {
  let user = { height: 1.8, gender: "male" };
  const [Size, setSize] = useState();

  // if(user?.height) {

  if (typeof props.person?.allPoses[0]?.keypoints[16] !== "undefined") {
    console.log(props.person?.allPoses[0]);
    const top = props.person?.allPoses[0].keypoints[1].position.y;
    const tall = Math.abs(
      props.person?.allPoses[0].keypoints[16]?.position.y - top
    );
    const ratio = user?.height / tall;
    const widthx = Math.abs(
      props.person?.allPoses[0].keypoints[5]["position"]["x"] -
        props.person?.allPoses[0].keypoints[6]["position"]["x"]
    );

    const entourage = widthx * ratio * 2 + 0.2;

    if (user?.gender === "male") {
      if (entourage <= 0.889) setSize("XS");
      if (entourage > 0.889 && entourage < 0.9398) {
        setSize("S");
      } else if (entourage > 0.9398 && entourage < 1.016) {
        setSize("M");
      } else if (entourage > 1.016 && entourage < 1.0922) {
        setSize("L");
      } else if (entourage > 1.0922 && entourage < 1.1684) {
        setSize("XL");
      } else if (entourage > 1.1684 && entourage < 1.2446) {
        setSize("XXL");
      } else if (user?.gender === "female") {
        if (entourage > 0.8128 && entourage < 0.8509) {
          setSize("XS");
        } else if (entourage > 0.8509 && entourage < 0.889) {
          setSize("S");
        } else if (entourage > 0.889 && entourage < 0.9398) {
          setSize("M");
        } else if (entourage > 0.9398 && entourage < 0.9906) {
          setSize("X");
        } else if (entourage > 0.9906 && entourage < 1.0414) {
          setSize("XL");
        } else if (entourage > 1.0541) {
          setSize("XXL");
        }
      }
      if (typeof Size !== "undefined") alert(Size);
    }
  }
  //}

  return (
    <>
      <div style={{ position: "relative" }} className="col">
        <div className="top-banner-wrapper">
          <a href="#">
            <img
              src="../assets/images/coming-soon.jpg"
              className="img-fluid blur-up lazyloaded"
              alt=""
            />
          </a>
          <div className="top-banner-content small-section">
            <h4>Welcome! EASYWEAR</h4>
            <h5></h5>
          </div>
        </div>

        {user == null ? (
          <h3>Log in to get your size</h3>
        ) : typeof Size == "undefined" ? (
          <h3>
            {" "}
            Hello!, to get your Size stay in front of cam in way thats your head
            and your feet appear in screen{" "}
          </h3>
        ) : (
          <h3>Good job You size is {Size}</h3>
        )}
      </div>
    </>
  );
}
function PutClothes(props) {
  const imageRef = useRef(null);
  const personDetail = props.person;
  const x = personDetail?.allPoses[0]?.keypoints[6]["position"]["x"];
  const y = personDetail?.allPoses[0]?.keypoints[6]["position"]["y"];
  // console.log(person);
  const widthx = Math.abs(
    personDetail?.allPoses[0]?.keypoints[5]["position"]["x"] -
      personDetail?.allPoses[0]?.keypoints[6]["position"]["x"]
  );

  const image = imageRef.current;
  if (image) {
    image.style.top = y + "px";
    image.style.left = x + "px";
    image.style.width = widthx + "px";
  }

  return (
    <>
      <img
        ref={imageRef}
        src="https://www.torontotees.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/0/500_32.png"
        alt=""
        style={{
          position: "absolute",
          zindex: 10,
          width: 50,
          height: 40,
        }}
      />
    </>
  );
}

function GetSize() {
  /*
  const isAndroid = () => {
    return /Android/i.test(navigator.userAgent);
  };
  const isiOS = () => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };
  const isMobile = () => {
    return isAndroid() || isiOS();
  };
  const videoConstraints = isMobile
    ? {
      facingMode: "user",
    }
    : {};
  */
  const stats = new Stats();
  // const canvas = document.querySelector("canvas");
  const webcamRef = useRef(null);
  const [net, setNet] = useState();
  const [activeRole, setactiveRole] = useState("clothes");
  const [person, setperson] = useState();
  // const ctx = canvas?.getContext("2d");
  const getnet = async () => {
    const lnet = await bodyPix.load({
      architecture: "MobileNetV1",
      outputStride: 16,
      multiplier: 0.75,
      quantBytes: 2,
    });
    setNet(lnet);
  };

  const runBodysegment = () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      //  Loop and detect hands

      // stats.begin();
      setInterval(() => {
        detect();
      }, 1000);

      // stats.end();

      // requestAnimationFrame(runBodysegment);
    }
  };
  const detect = async () => {
    // Check data is available
    //  console.log(webcamRef);

    const personDetail = await net.segmentPersonParts(webcamRef.current.video, {
      flipHorizontal: false,
      internalResolution: "medium",
      segmentationThreshold: 0.7,
      scoreThreshold: 0.2,
      nmsRadius: 20,
      minKeypointScore: 0.3,
      refineSteps: 10,
    });

    if (personDetail) {
      console.log("detection en cour");
      setperson(personDetail);
    }
  };
  getnet();
  const handleclick = () => {
    if (activeRole == "size") setactiveRole("clothes");
    else if (activeRole == "clothes") setactiveRole("size");
  };
  runBodysegment();
  //bindPage();

  return (
    <>
      <div className="row">
        <Webcam
          ref={webcamRef}
          style={{
            marginLeft: "0",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
            //  videoConstraints:{videoConstraints}
          }}
        />

        <CalculateSize person={person} />
      </div>
    </>
  );
}

export default GetSize;
/* 
{
   activeRole == "size" ? (
     <CalculateSize person={person} />
   ) : (
     <PutClothes person={person} />
   );
 }
 */
