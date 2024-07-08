// import {Metadata} from "next";

// type Props = {
//   params: {
//     productId: string;
//   }
// }

// export const generateMetadata = ({params: Props}): Metadata => {
// return {
//   title: `Product ${params.productId}`
// }
// }

//typescript code

export const generateMetadata = async ({ params }) => {
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }) {
  //params available as a prop
  //params object contains route parameters as key value pairs
  return (
    <>
      <h1>Product details about product {params.productId}</h1>
    </>
  );
}
