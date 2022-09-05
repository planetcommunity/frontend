import React, { useState } from "react";
import "./register.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../../containers/RegistrationInputFieldsComponent/input.css";
import { useRef } from "react";
import Alert from "react-bootstrap/Alert";
import RegistrationService from "../../services/registrationservice";

function Register() {
  const [responseErrorMessage, setResponseErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const emailInputRef = useRef();
  const aliesInputRef = useRef();
  const session = window.sessionStorage;
  const [emailShow, setEmailShow] = useState(true);
  const [aliasShow, setAliasShow] = useState(false);

  let [state, setState] = useState({
    loading: false,
    successContent: "",
    errorMessage: "",
  });

  const verifyEmail = (emailAddress) => {
    session.setItem("email", emailAddress);
    if (emailAddress.length <= 0) {
      console.log("email is null");

      alert("Enter Email and try again");
    }

    RegistrationService.verfyEmail(emailAddress).then(
      (res) => {
        console.log("response is" + res.data);

        setState({
          ...state,
          loading: true,
          successContent: res.data,
        });
        setEmailShow(false);
        setAliasShow(true);
      },
      (err) => {
        console.log(err);
    
        if (err.code === "ERR_NETWORK") {
          setResponseErrorMessage("Network Busy!... Please try again shortly");
        } else {
          setResponseErrorMessage(err.message);
        }
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
        setState({
          ...state,
          loading: false,
          errorMessage: err.message,
        });
      }
    );
  };

  const verifyAlies = (alies) => {
    session.setItem("alies", alies);
    if (alies.length <= 0) {
      console.log("slies is null");

      alert("Enter alies and try again");
    }

    RegistrationService.verfyAlies(alies).then(
      (res) => {
        console.log("response is" + res.data);

        setState({
          ...state,
          loading: true,
          successContent: res.data,
        });
        
      },
      (err) => {
        console.log(err);
        setAliasShow(true);
        if (err.code === "ERR_NETWORK") {
          setResponseErrorMessage("Network Busy!... Please try again shortly");
        } else {
          setResponseErrorMessage(err.message);
        }
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
        setState({
          ...state,
          loading: false,
          errorMessage: err.message,
        });
      }
    );
  };

  return (
    <div className="plannet_web_login">
      {isError && (
        <div className="plannet_web_notifications">
          <Alert key="danger" variant="danger">
            {responseErrorMessage}
          </Alert>
        </div>
      )}

      <div className="plannet_web_register">
        {emailShow && (
          <Card className="text-center">
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
                  onClick={() => verifyEmail(emailInputRef.current.value)}
                  id="input_card_elements_next"
                >
                  Next
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}

{aliasShow && (
          <Card className="text-center">
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
                  onClick={() => verifyAlies(aliesInputRef.current.value)}
                  id="input_card_elements_next"
                >
                  Next
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
}

export default Register;