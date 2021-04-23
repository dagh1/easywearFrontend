import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";

import Stats from 'stats.js';
import jwtDecode from "jwt-decode";

  function CalculateSize (props)  {
  
    let user; 
    const [Size, setSize] = useState();
     
   const jwtToken = localStorage.getItem("jwt");
   if (jwtToken) {
     // Set auth token header auth
     user = jwtDecode(jwtToken); // Decode token and get user info and exp
     
   }
  // if(user?.height) { 
   
    console.log(props.person?.allPoses[0]);
    if (typeof props.person?.allPoses[0].keypoints[16] !== "undefined") {
      
      const top = props.person?.allPoses[0].keypoints[1].position.y;
      const tall = props.person?.allPoses[0].keypoints[16]?.position.y - top;
      const ratio = 1.8 / tall;
      const widthx = Math.abs(
        props.person?.allPoses[0].keypoints[5]["position"]["x"] -
        props.person?.allPoses[0].keypoints[6]["position"]["x"]
     
    
      );
      console.log(widthx * ratio);
      if (widthx * ratio > 0.889 && widthx * ratio < 0.9398) {

        setSize("S");
      }
      else if
        (widthx * ratio > 0.9398 && widthx * ratio < 1.016) {
    
        setSize("M");
      }
      else if
        (widthx * ratio > 1.016 && widthx * ratio < 1.0922) {
    
        setSize("L");
      }
      else if
        (widthx * ratio > 1.0922 && widthx * ratio < 1.1684) {
  
        setSize("XL");
      }
      else if
        (widthx * ratio > 1.1684 && widthx * ratio < 1.2446) {
    
        setSize("XXL");
      }
    }
   //}
 

   return (
     <>
     <h3>{Size}</h3>
     </>);
}
function PutClothes (props){

  const imageRef = useRef(null);
const personDetail = props.person;
  const x = personDetail?.allPoses[0]?.keypoints[6]["position"]["x"];
  const y = personDetail?.allPoses[0]?.keypoints[6]["position"]["y"];
  // console.log(person);
  const widthx = Math.abs(
    personDetail?.allPoses[0]?.keypoints[5]["position"]["x"] - personDetail?.allPoses[0]?.keypoints[6]["position"]["x"]
  );

  const image = imageRef.current;
  if (image) {
    image.style.top = y  + "px";
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
 


function BodyDetection() {
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
  }

 

  const runBodysegment = () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      //  Loop and detect hands
      stats.begin();
      detect()
     
      stats.end();

      requestAnimationFrame(runBodysegment);
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
      
      setperson(personDetail);
       
      }
    
  };
  getnet();
  const handleclick = () => {
    if (activeRole == "size")setactiveRole("clothes");
    else if (activeRole == "clothes") setactiveRole("size");
  }   
  runBodysegment();
  //bindPage();
  

  return (
    <>
    

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
     
        
    
    </>
  );
}
export default BodyDetection;
/* 
{
   activeRole == "size" ? (
     <CalculateSize person={person} />
   ) : (
     <PutClothes person={person} />
   );
 }
 */