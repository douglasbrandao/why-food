import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Options, StyledButton, Price } from "./styles";
import { Modal, Image, Form, Badge } from "react-bootstrap";

import PlusMinusInput from "../PlusMinusInput";

function ProductInfo({ show, product, handleClose }) {
  const [productInfos, setProductInfos] = useState({});
  const [optionsProducts, setOptionsProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function handleProductInfos() {
      const response = await api.get(`/api/products/${product.id}`);
      setProductInfos(response.data);
      setOptionsProducts(response.data.options);
      setTotalPrice(response.data.price);
    }

    handleProductInfos();
    // eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Modal show={show} onHide={handleClose} scrollable>
      <Modal.Header closeButton>
        <Image src={productInfos.image_url} width="50%" rounded />
      </Modal.Header>
      <Modal.Body>
        <Badge variant="success">{product.price}</Badge>
        <Form onSubmit={handleSubmit}>
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
                <Form.Check
                  key={values.id}
                  id={`${options.title}-${values.id}`}
                >
                  {options.type === "single" ? (
                    <>
                      <Form.Check.Input
                        name={options.title}
                        type="radio"
                        isValid
                      />
                      <Form.Check.Label>{values.name}</Form.Check.Label>
                    </>
                  ) : (
                    <Form.Check.Label>
                      {values.name}
                      <PlusMinusInput min={options.min} max={options.max} />
                    </Form.Check.Label>
                  )}
                  <Price>{values.price}</Price>
                </Form.Check>
              ))}
            </>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <StyledButton onClick={handleClose}>
          <b>Fazer pedido</b> <small>{totalPrice}</small>
        </StyledButton>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductInfo;
