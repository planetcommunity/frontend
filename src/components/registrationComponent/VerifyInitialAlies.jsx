import React from 'react'

import "./register.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../../containers/RegistrationInputFieldsComponent/input.css";
import { useRef } from "react";
import Alert from "react-bootstrap/Alert";
import RegistrationService from "../../services/registrationservice";


const VerifyInitialAlies =({aliesInputRef, verifyAliesData, isError, responseErrorMessage}) => {
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
                      ref={aliesInputRef}
                      type="text"
                      placeholder="Enter Alies"
                      required
                    />
                  </Form.Group>
                </Card.Text>
                <Button
                  onClick={() => verifyAliesData(aliesInputRef.current.value)}
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
