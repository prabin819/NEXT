import { notFound } from "next/navigation";

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
  //returns rand num between 0 and count (0 included, count not included)
}

export default function Review({ params }) {
  //params available as a prop
  //params object contains route parameters as key value pairs

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review.");
  }

  if (parseInt(params.review) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review details of product {params.productId} about review{" "}
        {params.review}
      </h1>
    </>
  );
}
