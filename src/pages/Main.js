import React, { useState, useEffect } from "react";
import api from "../services/api";

import ProductList from "../components/ProductList";
import { StyledContainer, StyledRow } from "./styles";
import { formatter } from "../utils/formatCurrency";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleProducts() {
      const productsList = await api.get("api/products");
      const data = productsList.data.map(product => ({
        ...product,
        priceFormatted: formatter(product.price)
      }));
      setProducts(data);
    }

    handleProducts();
  }, []);

  return (
    <StyledContainer>
      <StyledRow className="justify-content-center">
        {products.map(product => (
          <ProductList key={product.id} product={product} />
        ))}
      </StyledRow>
    </StyledContainer>
  );
}

export default Main;
