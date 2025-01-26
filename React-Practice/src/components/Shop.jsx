import Product from "./Product";

const Shop = () => {
  const productDetails = {
    name: "Nothing",
    price: 30000,
    description: "8GB with 256 GB",
  };
  return (
    <section>
      <h1>Welcome to Shopping</h1>
      <Product productDetails={productDetails} />
    </section>
  );
};

export default Shop;
