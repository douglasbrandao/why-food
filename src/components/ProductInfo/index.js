import React, { useState, useEffect, Fragment } from "react";
import api from "../../services/api";

import { Options, StyledButton, Price } from "./styles";
import { Modal, Image, Form, Badge } from "react-bootstrap";
import PlusMinusInput from "../PlusMinusInput";

import PropTypes from "prop-types";

function ProductInfo({ show, product, handleClose }) {
  const [productInfos, setProductInfos] = useState({});
  const [optionsProducts, setOptionsProducts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    obs: "",
    items: []
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function handleProductInfos() {
      const response = await api.get(`api/products/${product.id}`);
      setProductInfos(response.data);
      setForm({ ...form, id: response.data.id });
      setOptionsProducts(response.data.options);
      setTotalPrice(response.data.price);
    }

    handleProductInfos();
    // eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    await api.post("api/order", form).then(response => {
      console.log(response.data);
    });
  }

  function handleTextArea(e) {
    setForm({ ...form, obs: e.target.value });
  }

  function handleInputs(op_id, val_id, type, price) {
    setTotalPrice(totalPrice + price);
    setForm({
      ...form,
      items: [
        ...form.items,
        {
          id: op_id,
          value: val_id,
          type: type
        }
      ]
    });
  }

  return (
    <Modal show={show} onHide={handleClose} scrollable>
      <Modal.Header closeButton>
        <Image src={productInfos.image_url} width="50%" rounded />
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {optionsProducts.map(options => (
            <Fragment>
              <Options key={options.id} controlId={options.title}>
                <span>{options.title}</span>
                {options.required ? (
                  <Badge variant="secondary">Obrigatório</Badge>
                ) : null}
              </Options>

              {options.values.map(values => (
                <Form.Check
                  key={values.id}
                  id={`${options.title}-${values.id}`}
                >
                  {options.type === "single" ? (
                    <Fragment>
                      <Form.Check.Input
                        name={options.title}
                        type="radio"
                        onChange={() =>
                          handleInputs(
                            options.id,
                            values.id,
                            options.type,
                            values.price
                          )
                        }
                      />
                      <Form.Check.Label>{values.name}</Form.Check.Label>
                    </Fragment>
                  ) : (
                    <Form.Check.Label>
                      {values.name}
                      <PlusMinusInput min={options.min} max={options.max} />
                    </Form.Check.Label>
                  )}
                  <Price>{values.price}</Price>
                </Form.Check>
              ))}
            </Fragment>
          ))}
          <Form.Group controlId="Observacao">
            <Form.Label>Observação</Form.Label>
            <Form.Control as="textarea" onBlur={handleTextArea} rows="3" />
          </Form.Group>
          <Modal.Footer>
            <StyledButton type="submit">
              <b>Fazer pedido</b> <small>{totalPrice}</small>
            </StyledButton>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

ProductInfo.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number
    })
  ).isRequired
};

export default ProductInfo;
