import React, { useState } from "react";
import { Card, Options, StyledButton } from "./styles";
import { Modal, Image, Form, Badge } from "react-bootstrap";

function ProductList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} href="#">
        <h2>Pizza</h2>
        <span>A partir de R$ 15,00</span>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Image
            src="https://media-cdn.tripadvisor.com/media/photo-s/15/c5/a4/14/pepperoni-lovers.jpg"
            fluid
          />
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Options>
              <span>Escolha um sabor:</span>
              <Badge variant="secondary">Obrigatório</Badge>
            </Options>
            {[
              { id: 1, name: "Pure de batata", price: 0 },
              { id: 2, name: "Vinagrete", price: 0 },
              { id: 3, name: "Batata palha", price: 0 }
            ].map(type => (
              <Form.Check
                type="radio"
                id={type.id}
                name="cobertura"
                label={type.name}
              />
            ))}

            <Options>
              <span>Selecione o tipo de salsicha:</span>
            </Options>
            {[
              { id: 4, name: "Salsicha bovina", price: 0 },
              { id: 5, name: "Salsicha de frango", price: 1 },
              { id: 6, name: "Salsicha vegana", price: 1.75 }
            ].map(type => (
              <Form.Check
                type="radio"
                id={type.id}
                name="salsicha"
                label={type.name}
              />
            ))}

            <Options>
              <span>Deseja algum adicional?</span>
            </Options>
            {[
              { id: 7, name: "Dobro de queijo", price: 1.5 },
              { id: 8, name: "Molho com creme de leite", price: 0.75 },
              { id: 9, name: "Bacon", price: 1.25 }
            ].map(type => (
              <Form.Check
                type="checkbox"
                id={type.id}
                name="adicional"
                label={type.name}
              />
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

export default ProductList;
