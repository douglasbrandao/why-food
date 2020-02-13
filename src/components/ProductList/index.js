import React, { useState } from "react";
import { StyledCard } from "./styles";
import ProductInfo from "../ProductInfo";
import PropTypes from "prop-types";

function ProductList({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledCard onClick={handleShow}>
      <h2>{product.name}</h2>
      <span>A partir de {product.priceFormatted}</span>
      <ProductInfo show={show} product={product} handleClose={handleClose} />
    </StyledCard>
  );
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

export default ProductList;
