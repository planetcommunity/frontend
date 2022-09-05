import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import './input.css';
function Input() {
  return (
    <div className="input_card_elements">
      <Card.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </Card.Text>
      <Button id="input_card_elements_next">Next</Button>
    </div>
  );
}

export default Input;
