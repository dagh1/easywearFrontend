import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";

function BodyDetection() {
  // const canvas = document.querySelector("canvas");
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  // const ctx = canvas?.getContext("2d");

  const runBodysegment = async () => {
    const net = await bodyPix.load({
      architecture: "ResNet50",
      outputStride: 32,
      quantBytes: 2,
    });
    console.log("BodyPix model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 1);
  };
  const detect = async (net) => {
    // Check data is available
    //  console.log(webcamRef);
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      // * One of (see documentation below):
      // *   - net.segmentPerson
      // *   - net.segmentPersonParts
      // *   - net.segmentMultiPerson
      // *   - net.segmentMultiPersonParts
      // const person = await net.segmentPerson(video);
      const person = await net.segmentPersonParts(video);
      //    console.log(person);
      const opacity = 0.7;
      const flipHorizontal = false;
      const maskBlurAmount = 0;
      const canvas = canvasRef.current;
      //  console.log(canvasRef);
      const ctx = canvas?.getContext("2d");
      var image = new Image();
      requestCORSIfNotSameOrigin(
        image,
        "https://webglfundamentals.org/webgl/resources/keyboard.jpg"
      );
      var imagedata = null;
      image.src = "https://webglfundamentals.org/webgl/resources/keyboard.jpg";

      const coloredPartImage = bodyPix.toColoredPartMask(person);

      //image.addEventListener('load', function() {
      // Now that the image has loaded make copy it to the texture.
      // const coloredPartImage = bodyPix.toMask(person);
      if (person) {
        const x = person?.allPoses[0]?.keypoints[5]["position"]["x"];
        const y = person?.allPoses[0]?.keypoints[5]["position"]["y"];

        const widthx = Math.abs(person?.allPoses[0]?.keypoints[6]["position"]["x"] - x);
        const widthy = Math.abs(
          person?.allPoses[0]?.keypoints[6]["position"]["y"] - y
        );
        console.log(person?.allPoses[0]);
        image = imageRef.current;
        image.style.top = y + "px";
        image.style.left = x + "px";
        image.style.width = widthx + "px";
        
        // console.log(image.style.top);
        bodyPix.drawMask(
          canvas,
          video,
          coloredPartImage,
          opacity,
          maskBlurAmount,
          flipHorizontal
        );
      }
    }
  };

  runBodysegment();

  function requestCORSIfNotSameOrigin(img, url) {
    if (new URL(url, window.location.href).origin !== window.location.origin) {
      img.crossOrigin = "";
    }
  }

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
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          marginLeft: "0",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
      <img
        ref={imageRef}
        src="https://webglfundamentals.org/webgl/resources/keyboard.jpg"
        style={{
          position: "absolute",

          width: 50,
          height: 40,
        }}
      />
    </>
  );
}
export default BodyDetection;
