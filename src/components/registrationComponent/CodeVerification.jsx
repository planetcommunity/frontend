import React, {useState} from 'react'
import "./register.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../../containers/RegistrationInputFieldsComponent/input.css";

import Alert from "react-bootstrap/Alert";
import RegistrationService from "../../services/registrationservice";

const CodeVerification = () => {

    const [responseMessage, setResponseMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isVerify, setIsVerify] = useState(false);
    
    let [verifyCode, setVerifyCode] = useState({
        code:{
          code:''
        }
    });

    const handleOnChange = (e) => {
        setVerifyCode({
          ...verifyCode,
          code:{...verifyCode.code,[e.target.name] : e.target.value}
        });
      }

    const verifyVerificationCode = (verifyCode) => {
        console.log("veryfy code" + verifyCode);
        
        RegistrationService.verfyPinCode(verifyCode).then(
            
            (res) => {
              console.log("response is" + res.data);
              setResponseMessage(res.data)
              setIsVerify(true)
            },
            (err) => {
              console.log(err);
              
              if (err.code === "ERR_NETWORK") {

                setResponseMessage("Network Busy!... Please try again shortly")
              } else {
                setResponseMessage(err.message)
              }
              setIsError(true)
              setTimeout(() => {
                setIsError(false);
              }, 3000);
             
            }
          );
    }

  return (
    <div>
      <div className="plannet_web_login">
      {isError && (
        <div className="plannet_web_notifications">
          <Alert key="danger" variant="danger">
            {responseMessage}
          </Alert>
        </div>
      )}

    {isVerify && (
            <div className="plannet_web_notifications">
            <Alert key="success" variant="success">
                {responseMessage}
            </Alert>
            </div>
        )}

      <div className="plannet_web_register">
          <Card className="text-center">
          <Card.Header>Code Verification</Card.Header>
            <Card.Body className="card__body">
              <div className="input_card_elements">
                <Card.Text>
                  <Form.Group className="mb-3" controlId="formBasicVerifyCode">
                    <Form.Control
                      type="text"
                      placeholder="Enter Code"
                      required
                      name='code'
                onChange={(e) => handleOnChange(e)}
                    />
                  </Form.Group>
                </Card.Text>
                <Button
                  onClick={(e) => verifyVerificationCode(verifyCode.code)}
                  id="input_card_elements_next"
                >
                  Verify
                </Button>
              </div>
            </Card.Body>
          </Card>
        
      </div>
    </div>
      
    </div>
  )
}

export default CodeVerification
