import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
          <li><Link to='/products/Book' >Book</Link></li>
          <li><Link to='/products/Carpet' >Carpet</Link></li>
          <li><Link to='/products/OnlineCourse' >Online Course</Link></li>
      </ul>
    </>
  );
};

export default Products;
