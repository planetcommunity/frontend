import React from 'react'
import './register.css';
import Logo from '../../assets/logo.png';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";


function Register() {

  let isEmailVerified  = true;

  return (
    <div style={{ backgroundImage:`url(${Logo})`
    ,backgroundRepeat:"no-repeat",
    backgroundSize:"contain"
    ,backgroundPosition: "bottom",
    height:500
    }}>

  
    <div className="plannet_web_login">
      <div className="plannet_web_notifications"></div>

      <div className="plannet_web_login_home_title">
        <h1>Register to the PLANNET WEB</h1>
        
      </div>

      <div className="plannet_web_login_home_subtitile">
        <h4>You can register here to the system.</h4>
      </div>
      {
        isEmailVerified?  <div className="planet_web_login_form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Next
          </Button>
        </Form>
      </div> :  <div className="planet_web_login_form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="email" placeholder="Enter Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Language</Form.Label>
            <Form.Select type="checkbox" placeholder="Enter Password">
              <option>Select Language</option>
            </Form.Select>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Next
          </Button>
        </Form>
      </div>
      }
     
    </div>
    </div>
  )
}

export default Register