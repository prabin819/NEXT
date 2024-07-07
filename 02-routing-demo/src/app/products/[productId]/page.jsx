export default function ProductList({ params }) {
  //params available as a prop
  //params object contains route parameters as key value pairs
  return (
    <>
      <h1>Product details about product {params.productId}</h1>
    </>
  );
}
