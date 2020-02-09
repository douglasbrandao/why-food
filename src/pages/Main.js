import React, { useState, useEffect } from "react";
import api from "../services/api";

import ProductList from "../components/ProductList";
import { StyledContainer, StyledRow } from "./styles";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleProducts() {
      const productsFromApi = await api.get("api/products");
      setProducts([...products, productsFromApi.data]);
    }

    handleProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <StyledContainer>
      <StyledRow className="justify-content-center">
        {products.map(arr_product =>
          arr_product.map(product => (
            <ProductList key={product.id} product={product} />
          ))
        )}
      </StyledRow>
    </StyledContainer>
  );
}

export default Main;
