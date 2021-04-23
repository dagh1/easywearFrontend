import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";

function BodyDetection() {
  // const canvas = document.querySelector("canvas");
  const webcamRef = useRef(null);

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
    }, 10);
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

      // Make Detections
      // * One of (see documentation below):
      // *   - net.segmentPerson
      // *   - net.segmentPersonParts
      // *   - net.segmentMultiPerson
      // *   - net.segmentMultiPersonParts
      // const person = await net.segmentPerson(video);
      const person = await net.segmentPersonParts(video);
      // console.log(person);

      //  console.log(canvasRef);

      //image.addEventListener('load', function() {
      // Now that the image has loaded make copy it to the texture.
      // const coloredPartImage = bodyPix.toMask(person);
      if (person) {
        const x = person?.allPoses[0]?.keypoints[8]["position"]["x"];
        const y = person?.allPoses[0]?.keypoints[8]["position"]["y"];
        const z = person?.allPoses[0]?.keypoints[13]["position"]["y"];

        const widthx = Math.abs(
          person?.allPoses[0]?.keypoints[7]["position"]["x"] - x
        );
        const highx = Math.abs(
          person?.allPoses[0]?.keypoints[7]["position"]["y"] - z
        );

        const image = imageRef.current;
        image.style.top = y + "px";
        image.style.left = x + "px";
        image.style.width = widthx + "px";
        image.style.height = highx + "px";

        // console.log(image.style.top);
      }
    }
  };

  runBodysegment();

  return (
    <>
      <Webcam
        ref={webcamRef}
        style={{
          marginLeft: "auto",
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
        src="https://pngimg.com/uploads/tshirt/tshirt_PNG5449.png?fbclid=IwAR04eCnCELAwcuYHLsmerHz4aC1F9_QgB02yMuVO1IgL5Lh80FkZmxay8aM"
        style={{
          position: "absolute",
        }}
      />
    </>
  );
}
export default BodyDetection;
