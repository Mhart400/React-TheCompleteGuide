import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Book Uno",
    description: "the first book I ever wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "2nd Book",
    description: "the second book I ended up writing",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
