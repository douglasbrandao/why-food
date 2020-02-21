import React, { useState, useEffect, createContext } from "react";
import api from "../services/api";

import ProductList from "../components/ProductList";
import { StyledContainer, StyledRow } from "./styles";
import { formatter } from "../utils/formatCurrency";

export const ProductsContext = createContext();

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
          <ProductsContext.Provider value={product}>
            <ProductList key={product.id} />
          </ProductsContext.Provider>
        ))}
      </StyledRow>
    </StyledContainer>
  );
}

export default Main;
