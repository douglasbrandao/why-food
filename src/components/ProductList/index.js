import React, { useState } from "react";
import { Card } from "./styles";
import ProductInfo from "../ProductInfo";

function ProductList({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card key={product.id} onClick={handleShow}>
        <h2>{product.name}</h2>
        <span>A partir de R$ {product.price},00</span>
      </Card>
      <ProductInfo show={show} product={product} handleClose={handleClose} />
    </>
  );
}

export default ProductList;
