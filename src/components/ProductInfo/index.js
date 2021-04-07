import React, { useState, useEffect, Fragment } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Badge
} from "reactstrap";
import PropTypes from "prop-types";
import api from "../../services/api";
import { formatter } from "../../utils/formatCurrency";
import Input from '../Input';
import { Options, Button, Price, Row, Img, CenterTop } from "./styles";

function ProductInfo({ show, handleClose, product }) {
  const [singlePrice, setSinglePrice] = useState({});
  const [multiplePrice, setMultiplePrice] = useState({});
  const [listPrice, setListPrice] = useState([]);
  const [initialPrice, setInitialPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    id: null,
    obs: "",
    items: []
  });
  
  useEffect(() => {
    async function handleData () {
      await api.get(`api/products/${product.id}`)
      .then(response => {
        setInitialPrice(response.data.price);
        setData(response.data);
      });
    }

    handleData();
  }, [product.id]);

  useEffect(() => {
    const totalSingle = Object.values(singlePrice).reduce((total, current) => total + current.price, 0);

    const totalMultiple = Object.values(multiplePrice).reduce((total, current) => total + current.price, 0);

    const totalList = listPrice.reduce((total, current) => total + (current.value.price * current.value.count), 0);

    setTotalPrice(initialPrice + totalSingle + totalMultiple + totalList);
  }, [initialPrice, singlePrice, multiplePrice, listPrice]);

  // Handlers

  function handleSingle(optionId, valueId, price) {
    setSinglePrice(prevSinglePrice => ({ ...prevSinglePrice, [optionId]: {
      id: optionId,
      value: valueId,
      type: "single",
      price
      }
    }));
  }

  function handleMultiple(optionId, valueId, price) {

      const multipleId = `${optionId}-${valueId}`;

      if(multiplePrice.hasOwnProperty(multipleId)) {
        const newMultiplePrice = { ...multiplePrice };
        delete newMultiplePrice[multipleId];
        setMultiplePrice(newMultiplePrice);
      } else {
        setMultiplePrice(prevMultiplePrice => ({ ...prevMultiplePrice, [multipleId]: {
          id: optionId,
          value: valueId,
          price,
          type: "multiple"
         }}));
      }
  }

  function handleList(optionId, valueId, price, count) {

    const listId = `${optionId}-${valueId}`;
      
    const updatedListPrice = listPrice.filter(element => element.listId !== listId);

    setListPrice([...updatedListPrice, {
      listId,
      id: optionId,
      value: { id: valueId, count, price },
      type: "list"
    }]);

  }

  function handlePost(e) {
    e.preventDefault();
    const newForm = { ...form };
    const singleItems = Object.values(singlePrice).map(item => ({ id: item.id, value: item.value, type: item.type }));
    newForm.items = [...newForm.items].concat(singleItems);
    
    setForm(newForm);
  }

  // Input configuration

  let optionsList = null;
  const {options} = data;

  if (options) {

    optionsList = options.map(option => {

      const values = option.values.map(value => (
        <Fragment key={value.id}>
          <FormGroup>
            <Row> 
              <Price>
                <strong>{value.name}</strong>
                <small>{formatter(value.price)}</small>
              </Price>
              <Input 
                option={option} 
                value={value} 
                handleSingle={handleSingle} 
                handleMultiple={handleMultiple}
                handleList={handleList}
              />
            </Row>

          </FormGroup>
        </Fragment>
      ));
      
      return (
        <Fragment key={option.id}>
          <Options>
            <span>{option.title}</span>
            {option.required && <Badge variant='secondary'>Obrigatório</Badge>}
          </Options>
          {values}
        </Fragment>
      );
    });
    
  }

  return (
    <Modal isOpen={show} toggle={handleClose} scrollable>
      <ModalHeader>{data.name}</ModalHeader>
        <ModalBody className='p-0'>
          <Form onSubmit={handlePost}>
              <CenterTop>
                <Img src={data.image_url} alt={data.name} />
              </CenterTop>

              {optionsList}

            <ModalFooter>
              <Button type='submit'>
                <b>Fazer seu pedido</b> <small>{formatter(totalPrice)}</small>
              </Button>
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
    id: PropTypes.number.isRequired
  }).isRequired
};

export default ProductInfo;
