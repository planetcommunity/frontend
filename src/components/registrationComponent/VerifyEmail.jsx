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
import { useState } from 'react';

import Home from '../../assets/home.png'
import Building from '../../assets/building.png'
import Hexagon from '../../assets/logo.png'

const VerifyEmail = ({verifyEmailAddress, responseErrorMessage, isError}) => {
  const [email, setEmail] = useState("");

  const handleOnChange = (value) => {
    console.log(value)
    setEmail(value)
  }

  return (
    <div>

<div className="plannet_web_login">
      <img src={Hexagon} alt="Hexagon" className="hexagon-shape" />
      {isError && (
        <div className="plannet_web_notifications">
          <Alert key="danger" variant="danger">
            {responseErrorMessage}
          </Alert>
        </div>
      )}

      <div className="plannet_web_logins_item_content d-flex flex-column align-items-center">
        <div className="plannet_web_logins_item_header">
          <h1>Email</h1>
          <h3>Verification</h3>
        </div>

        <div className="plannet_web_logins_item_form">
          <div className="mb-2">
            <label>Enter Email</label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"  
                      required
                      onChange={(e) => handleOnChange(e.target.value)}
                    />
                  </Form.Group>
          </div>
          <div className="mb-2 ">
          <Button
            className='w-100'
                  onClick={() => verifyEmailAddress(email)}
                  // id="input_card_elements_next"
                >
                  Next
                </Button>
          </div>
        </div>

        {/* <div className="plannet_web_logins_item_footer">
          <h4>Anti boot login question</h4>
          <div className="d-flex mt-2 align-items-center justify-content-center">
            <a href="#"><img src={Home} alt="Home" /></a>
            <a href="#" className="ms-3"><img src={Building} alt="Home" /></a>
          </div>
        </div> */}
      </div>

      
    </div>
      
    </div>
  )
}

export default VerifyEmail
