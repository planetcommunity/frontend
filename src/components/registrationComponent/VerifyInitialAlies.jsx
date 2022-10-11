import React, {useState} from 'react'

import "./register.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../../containers/RegistrationInputFieldsComponent/input.css";
import { useRef } from "react";
import Alert from "react-bootstrap/Alert";
import RegistrationService from "../../services/registrationservice";


const VerifyInitialAlies =({verifyAliesData, isError, responseErrorMessage}) => {
  const [alieas, setAlieas] = useState("");

  const handleOnChange = (value) => {
    console.log(value)
    setAlieas(value)
  }


  return (
    <>
    <div className="plannet_web_login">
      {isError && (
        <div className="plannet_web_notifications">
          <Alert key="danger" variant="danger">
            {responseErrorMessage}
          </Alert>
        </div>
      )}

      <div className="plannet_web_register"></div>
    <Card className="text-center">
    <Card.Header>Alies Verification</Card.Header>
            <Card.Body className="card__body">
              <div className="input_card_elements">
                <Card.Text>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Enter Alies"
                      required
                      onChange={(e) => handleOnChange(e.target.value)}
                    />
                  </Form.Group>
                </Card.Text>
                <Button
                  onClick={() => verifyAliesData(alieas)}
                  id="input_card_elements_next"
                >
                  Next
                </Button>
              </div>
            </Card.Body>
          </Card>
    </div>
    
    </>
  )
}

export default VerifyInitialAlies;
