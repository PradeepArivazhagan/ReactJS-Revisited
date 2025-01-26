import PropTypes from "prop-types";
const Product = ({ productDetails }) => {
  return (
    <div>
      <h1>{productDetails.name}</h1>
      <p>{productDetails.price}</p>
      <p>{productDetails.description}</p>
    </div>
  );
};

export default Product;

Product.propTypes = {
    productDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
};
