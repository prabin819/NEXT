function getRandomInt(count) {
  return Math.floor(Math.random() * count);
  //returns rand num between 0 and count (0 included, count not included)
}
const random = getRandomInt(2);

if (random === 1) {
  throw new Error("Error loading product.");
}
export default function ProductDetailsLayout({ params, children }) {
  return (
    <div>
      {children}
      <h2>Features product {params.productId}</h2>
    </div>
  );
}
