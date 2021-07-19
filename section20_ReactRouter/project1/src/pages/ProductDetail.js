import Products from "./Products";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>{params.productId}</h1>
      <h6>
        Back to <Link to="/products">Products</Link>
      </h6>
    </>
  );
};

export default ProductDetail;
