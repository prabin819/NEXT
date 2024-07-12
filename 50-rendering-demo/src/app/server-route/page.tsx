import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "../utils/server-utils";

export default function ServerRoutePage() {
  console.log(`server route rendered`);

  const result = serverSideFunction();
  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      <ImageSlider /> {/*behaves as client component*/}
    </>
  );
}
/*
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}
  */

//cuz the slider component is using client side features but the library code doesnt have the use client directive

//one solution => is to add "use client" directive within the server route but then you cannot use server  only features like database calls, env variables, etc.

//to resolve this => you must encapsulate third party components that depend on client only features within your own client component
