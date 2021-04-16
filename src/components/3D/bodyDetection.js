import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import { useParams } from "react-router-dom";
import Stats from 'stats.js';
import jwtDecode from "jwt-decode";

  function size (props)  {
  
   let user;
   const jwtToken = localStorage.getItem("jwt");
   if (jwtToken) {
     // Set auth token header auth
     user = jwtDecode(jwtToken); // Decode token and get user info and exp
     
   }
   
   
   return (
     <>
     <h3></h3>
     </>);
}

 

function BodyDetection() {
  const { imgurl } = useParams();
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

  
  const stats = new Stats();
  // const canvas = document.querySelector("canvas");
  const webcamRef = useRef(null);
  const [net, setNet] = useState();
  const imageRef = useRef(null);
 const [bodysize, setbodysize] = useState();
  // const ctx = canvas?.getContext("2d");
  const getnet = async () => {
    const lnet =
      await bodyPix.load({
        architecture: "ResNet50",
        outputStride: 32,
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

      detect();
      stats.end();

      requestAnimationFrame(runBodysegment);
    }
  };
  const detect = async () => {
    // Check data is available
    //  console.log(webcamRef);
   
    
  
      const person = await net.segmentPersonParts(webcamRef.current.video, {
        flipHorizontal: false,
        internalResolution: "medium",
        segmentationThreshold: 0.7,
        scoreThreshold: 0.2,
        nmsRadius: 20,
        minKeypointScore: 0.3,
        refineSteps: 10,
      });

    if (person) {
      console.log(person);
        const x = person?.allPoses[0]?.keypoints[6]["position"]["x"];
        const y = person?.allPoses[0]?.keypoints[6]["position"]["y"];
        // console.log(person);
        const widthx = Math.abs(
          person?.allPoses[0]?.keypoints[5]["position"]["x"] - x
        );

        const image = imageRef.current;
        image.style.top = y + 120 + "px";
        image.style.left = x + "px";
        image.style.width = widthx + "px";

        // console.log(image.style.top);
      }
    
  };
  getnet();
    
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
          videoConstraints:{videoConstraints}
        }}
      />
      <img
        ref={imageRef}
        src={imgurl}
        style={{
          position: "absolute",
          zindex: 10,
          width: 50,
          height: 40,
        }}
      />
      {stats.showPanel(0)}
    </>
  );
}
export default BodyDetection;
