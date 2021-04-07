import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "./styles";
import ProductInfo from "../ProductInfo";

function ProductList({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card onClick={handleShow}>
      <h2>{product.name}</h2>
      <span>A partir de {product.priceFormatted}</span>
      <ProductInfo show={show} handleClose={handleClose} product={product} />
    </Card>
  );
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    priceFormatted: PropTypes.string.isRequired
  }).isRequired
}

export default ProductList;
