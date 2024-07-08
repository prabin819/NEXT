export default function ProductDetailsLayout({ params, children }) {
  return (
    <div>
      {children}
      <h2>Features product {params.productId}</h2>
    </div>
  );
}
