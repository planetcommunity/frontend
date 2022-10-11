import React, { useState, useRef } from "react";
import "./register.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import validator from "validator";

const PasswordConfirmation = ({verifyPassword}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmErrorMessage, setConfirmErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [messageColor, setMessageColor] = useState('');
  const [dissableNext, setDissableNext] = useState(false);
  const session = window.sessionStorage;
  const passwordInputRef = useRef();

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPassword(value)
      setMessageColor("green");
      setErrorMessage("Strong Password");
    } else {
      setMessageColor("red");
      setErrorMessage("Is Not Strong Password");
    }
  };

  const confirmPassword = (value, value2) => {
    if (value === value2) {
      setMessageColor("green");
      setConfirmErrorMessage("Password Matched");
      setDissableNext(true);
    } else {
      setDissableNext(false);
      setMessageColor("red");
      setConfirmErrorMessage("The Password Id Not Matching");
    }
  };

  return (
    <div className="plannet_web_login">

      <div className="plannet_web_notifications"></div>
      <div className="plannet_web_logins_item">
        <Card className="text-center">
          <Card.Header>Password Confirmation</Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  required
                  onChange={(e) => validate(e.target.value)}
                  type="password"
                  placeholder="Enter Password"
                />
              </Form.Group>

              {errorMessage === "" ? null : 
              (<span style={{fontWeight: "bold",color: {messageColor},}}>{errorMessage}</span>)}

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control
                  required
                  ref={passwordInputRef}
                  type="password"
                  placeholder="Enter Again To Confirm Password"
                  onChange={(e) => confirmPassword(e.target.value, password)}
                />
              </Form.Group>
              {confirmErrorMessage === "" ? null : (<span style={{fontWeight: "bold",color: {messageColor},}}>{confirmErrorMessage}</span>)}
            </Card.Text>

            <Button  
            onClick={(e) => verifyPassword(password)}
            disabled={!dissableNext} id="input_card_elements_next" variant="primary" >Next</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PasswordConfirmation;
