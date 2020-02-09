import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Options, StyledButton } from "./styles";
import { Modal, Image, Form, Badge } from "react-bootstrap";

function ProductInfo({ show, product, handleClose }) {
  const [productInfos, setProductInfos] = useState({});
  const [optionsProducts, setOptionsProducts] = useState([]);

  useEffect(() => {
    async function handleProductInfos() {
      const response = await api.get(`/api/products/${product.id}`);
      setProductInfos(response.data);
      setOptionsProducts(response.data.options);
    }

    handleProductInfos();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose} scrollable>
        <Modal.Header>
          <Image src={productInfos.image_url} thumbnail />
        </Modal.Header>

        <Modal.Body>
          <Form>
            {optionsProducts.map(options => (
              <>
                <Options key={options.id}>
                  <span>{options.title}</span>
                  {options.required ? (
                    <Badge variant="secondary">Obrigatório</Badge>
                  ) : (
                    ""
                  )}
                </Options>

                {options.values.map(values => (
                  <Form.Check type="radio" id={`${options.title}-${values.id}`}>
                    <Form.Check.Input
                      name={options.title}
                      type="radio"
                      isValid
                    />
                    <Form.Check.Label>{values.name}</Form.Check.Label>
                    <Form.Control.Feedback type="valid">
                      R$ {values.price}
                    </Form.Control.Feedback>
                  </Form.Check>
                ))}
              </>
            ))}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <StyledButton onClick={handleClose}>
            <b>Fazer pedido</b> <small>R$15,00</small>
          </StyledButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductInfo;
