import { Product } from "../../components/product";
import { Reviews } from "../../components/reviews";
import { Suspense } from "react";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>loading product detail</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>loading reviews detail</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
