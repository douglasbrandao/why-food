import React, { useState, useEffect } from "react";
import api from "../services/api";
import ProductList from "../components/ProductList";
import { Container, Row } from "./styles";
import { formatter } from "../utils/formatCurrency";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function handleProducts() {
      const productsList = await api.get("api/products");
      const productListData = productsList.data;
      const productListWithPriceFormatted = productListData.map(product => ({
        ...product,
        priceFormatted: formatter(product.price)
      }));
      setProducts(productListWithPriceFormatted);
    }

    handleProducts();
  }, []);

  return (
    <Container>
      <Row>
        {products.map(product => <ProductList key={product.id} product={product} />)}
      </Row>
    </Container>
  );
}

export default Main;
