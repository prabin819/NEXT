export default function Review({ params }) {
  //params available as a prop
  //params object contains route parameters as key value pairs
  return (
    <>
      <h1>
        Review details of product {params.productId} about review{" "}
        {params.review}
      </h1>
    </>
  );
}
