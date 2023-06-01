import PropTypes from "prop-types";

export function Product({ producName = "Product Name", price = "999", description="Description" }) {
  return (
    <>
      <h1>{producName}: {description}</h1>
      <p>${price}</p>
    </>
  );
}

Product.propTypes = {
  producName: PropTypes.string,
  price: PropTypes.number.isRequired
};
