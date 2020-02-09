import React, { useState } from "react";
import { Card } from "./styles";
import ProductInfo from "../ProductInfo";
import PropTypes from "prop-types";

function ProductList({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card key={product.id} onClick={handleShow}>
        <h2>{product.name}</h2>
        <span>A partir de {product.price}</span>
      </Card>
      <ProductInfo show={show} product={product} handleClose={handleClose} />
    </>
  );
}

ProductList.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number
    })
  ).isRequired
};

export default ProductList;
