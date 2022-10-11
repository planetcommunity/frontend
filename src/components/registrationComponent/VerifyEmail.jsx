import React from 'react'
import "./register.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../../containers/RegistrationInputFieldsComponent/input.css";
import { useRef } from "react";
import Alert from "react-bootstrap/Alert";
import RegistrationService from "../../services/registrationservice";
import VerifyInitialAlies from './VerifyInitialAlies'

const VerifyEmail = ({verifyEmailAddress, responseErrorMessage, emailInputRef, isError}) => {
    
  return (
    <div>

<div className="plannet_web_login">
      {isError && (
        <div className="plannet_web_notifications">
          <Alert key="danger" variant="danger">
            {responseErrorMessage}
          </Alert>
        </div>
      )}

      <div className="plannet_web_register">

          <Card className="text-center">
          <Card.Header>Email Verification</Card.Header>
            <Card.Body className="card__body">
              <div className="input_card_elements">
                <Card.Text>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      ref={emailInputRef}
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>
                </Card.Text>
                <Button
                  onClick={() => verifyEmailAddress(emailInputRef.current.value)}
                  id="input_card_elements_next"
                >
                  Next
                </Button>
              </div>
            </Card.Body>
          </Card>
        
      </div>
    </div>
      
    </div>
  )
}

export default VerifyEmail
