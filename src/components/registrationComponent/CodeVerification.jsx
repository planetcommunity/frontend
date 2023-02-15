import React, {useState} from 'react'
import "./register.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../../containers/RegistrationInputFieldsComponent/input.css";

import Alert from "react-bootstrap/Alert";
import RegistrationService from "../../services/registrationservice";

import Home from '../../assets/home.png'
import Building from '../../assets/building.png'
import Hexagon from '../../assets/logo.png'
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
      <img src={Hexagon} alt="Hexagon" className="hexagon-shape" />
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

      <div className="plannet_web_logins_item_content d-flex flex-column align-items-center">
          <div className="plannet_web_logins_item_header">
            <h1>Code</h1>
            <h3>Verification</h3>
          </div>

          <div className="plannet_web_logins_item_form">
            <div className="mb-2">
              <label>Enter Code</label>
              <Form.Group className="mb-3" controlId="formBasicVerifyCode">
                    <Form.Control
                      type="text"
                      required
                      name='code'
                onChange={(e) => handleOnChange(e)}
                    />
                  </Form.Group>
            </div>
            <div className="mb-2 ">
            <Button
                  onClick={(e) => verifyVerificationCode(verifyCode.code)}
                  className="w-100"
                >
                  Verify
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

export default CodeVerification
