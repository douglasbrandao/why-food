import React, { useState, useEffect, Fragment } from "react";
import api from "../../services/api";
import { formatter } from "../../utils/formatCurrency";

import { Options, StyledButton, LabelPrice, RowInput } from "./styles";
import {
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  CustomInput,
  Input,
  Label,
  Badge
} from "reactstrap";
import PlusMinusInput from "../PlusMinusInput";

import PropTypes from "prop-types";

function ProductInfo({ show, product, handleClose }) {
  const [optionsProducts, setOptionsProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [form, setForm] = useState({
    id: null,
    obs: "",
    items: []
  });

  useEffect(() => {
    async function handleProductInfos() {
      const response = await api.get(`api/products/${product.id}`);
      setForm({ ...form, id: response.data.id });
      setOptionsProducts(response.data.options);
      setTotalPrice(response.data.price);
    }

    handleProductInfos();
    // eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
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
    <Modal isOpen={show} toggle={handleClose} scrollable>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          {optionsProducts.map(options => (
            <Fragment>
              <Options key={options.id}>
                <span>{options.title}</span>
                {options.required && (
                  <Badge variant="secondary">Obrigatório</Badge>
                )}
              </Options>

              {options.values.map(values => (
                <FormGroup key={values.id}>
                  <RowInput>
                    <LabelPrice>
                      <strong>{values.name}</strong>
                      <small>{formatter(values.price)}</small>
                    </LabelPrice>
                    {options.type === "single" && (
                      <CustomInput
                        type="radio"
                        id={`valueId-${options.id}-${values.id}`}
                        name={`valueName-${options.id}`}
                        onClick={() =>
                          handleInputs(
                            options.id,
                            values.id,
                            options.type,
                            values.price
                          )
                        }
                      />
                    )}

                    {options.type === "multiple" && (
                      <PlusMinusInput min={options.min} max={options.max} />
                    )}

                    {options.type === "list" && (
                      <PlusMinusInput min={options.min} max={options.max} />
                    )}
                  </RowInput>
                </FormGroup>
              ))}
            </Fragment>
          ))}
          <FormGroup>
            <Label>Observação</Label>
            <Input type="textarea" name="obs" onBlur={handleTextArea} />
          </FormGroup>
          <ModalFooter>
            <StyledButton type="submit">
              <b>Fazer pedido</b> <small>{formatter(totalPrice)}</small>
            </StyledButton>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
}

ProductInfo.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

export default ProductInfo;
