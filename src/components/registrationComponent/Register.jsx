import React, { useState } from "react";
import "./register.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../../containers/RegistrationInputFieldsComponent/input.css";
import { useRef } from "react";
import RegistrationService from "../../services/registrationservice";

function Register() {
  const [mailVerfied, setMailVerified] = useState(false);
  const fileInputRef = useRef()
  const session = window.sessionStorage;

  let [state, setState] = useState({
    loading: false,
    successContent: '',
    errorMessage: ''});

  const verifyEmail = (emailAddress) => {
    try {
        console.log(emailAddress);
        session.setItem('email',emailAddress);
        if (emailAddress.length <=0) {
          console.log("email is null");

          alert("Enter Enail and try again")
        }
        console.log('session storage email ', session.getItem('email'));
        const response = RegistrationService.verfyEmail(emailAddress);

        if (response) {
          setState({
            ...state,
            loading: true,
            successContent: response.data
        });}
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message
      });
      

      }
    
  }
  let { loading, successContent, errorMessage } = state;

  return (
    <div className="plannet_web_login">
      <div className="plannet_web_notifications"></div>
      <div className="plannet_web_register">
        <Card className="text-center">
          <Card.Body className="card__body">
            <div className="input_card_elements">
              <Card.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control ref={fileInputRef} type="email" placeholder="Enter Email" required/>
                </Form.Group>
              </Card.Text>
              <Button onClick={() =>verifyEmail(fileInputRef.current.value)} 
              
              id="input_card_elements_next">Next</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Register;
