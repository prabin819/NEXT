// "use client";

// import { serverSideFunction } from "../utils/server-utils";

// export default function ClientRoutePage() {
//   console.log(`client route rendered`);

//   const result = serverSideFunction();

//   return (
//     <>
//       <h1>ClientRoutePage</h1>
//       <p>{result}</p>
//     </>
//   );
// }

"use client";

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
