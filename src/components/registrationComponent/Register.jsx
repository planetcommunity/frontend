import React, { useState } from "react";
import "./register.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../../containers/RegistrationInputFieldsComponent/input.css";

function Register() {
  const [mailVerfied, setMailVerified] = useState(false);

  return (
    <div className="plannet_web_login">
      <div className="plannet_web_notifications"></div>
      <div className="plannet_web_register">
        <Card className="text-center">
          <Card.Body className="card__body">
            <div className="input_card_elements">
              <Card.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Card.Text>
              <Button id="input_card_elements_next">Next</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Register;
