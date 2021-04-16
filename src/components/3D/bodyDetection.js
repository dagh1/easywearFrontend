import React, { useRef, useState } from "react";

import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";

import Stats from 'stats.js';
import jwtDecode from "jwt-decode";

  function CalculateSize (props)  {
  
    let user; 
   const [size,setsize]=useState();
   const jwtToken = localStorage.getItem("jwt");
   if (jwtToken) {
     // Set auth token header auth
     user = jwtDecode(jwtToken); // Decode token and get user info and exp
     
   }
   if(user.height) {
   const top= props.person.keypoints[1].position.y 
   const tall= props.person.keypoints[17].position.y- top; 
   const ratio=user.height/tall;
   const widthx = Math.abs(
    props.person.keypoints[5]["position"]["x"] - props.person.keypoints[6]["position"]["x"]
  );
if (widthx*ratio > 0.889 && widthx*ratio <0.9398) {
setsize("S");
}
else if
(widthx*ratio > 0.9398 && widthx*ratio < 1.016 ){
  setsize("M");
}
   else if
(widthx*ratio > 1.016 && widthx*ratio < 1.0922 ){
  setsize("L");
}
else if
(widthx*ratio > 1.0922 && widthx*ratio <1.1684 ){
  setsize("XL");
}
else if
(widthx*ratio > 1.1684 && widthx*ratio < 1.2446 ){
  setsize("XXL");
}
   }
   
   return (
     <>
     <h3>{size}</h3>
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
  image.style.top = y + 120 + "px";
  image.style.left = x + "px";
  image.style.width = widthx + "px";



  return (
    <>
    <img
        ref={imageRef}
   alt=""
        style={{
          position: "absolute",
          zindex: 10,
          width: 50,
          height: 40,
        }}
      />
    </>);
}
 


function BodyDetection() {

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
 
 const [person, setperson] = useState();
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
     
    
      <PutClothes person={person.allPoses[0]} />
      <CalculateSize person={person.allPoses[0]} />
    </>
  );
}
export default BodyDetection;
