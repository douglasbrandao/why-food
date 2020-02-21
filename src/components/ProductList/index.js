import React, { useState, useContext } from "react";
import { StyledCard } from "./styles";
import ProductInfo from "../ProductInfo";

import { ProductsContext } from "../../pages/Main";

function ProductList() {
  const product = useContext(ProductsContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledCard onClick={handleShow}>
      <h2>{product.name}</h2>
      <span>A partir de {product.priceFormatted}</span>
      <ProductInfo show={show} handleClose={handleClose} />
    </StyledCard>
  );
}

export default ProductList;
