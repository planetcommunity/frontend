import React from "react";
import "./login.css";
import Logo from '../../assets/logo.png';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { width } from "@mui/system";
function Login() {
  return (
    <div style={{ backgroundImage:`url(${Logo})`
    ,backgroundRepeat:"no-repeat",
    backgroundSize:"contain"
    ,backgroundPosition: "center",
    height:500
    }}>

  
    <div className="plannet_web_login">
      <div className="plannet_web_notifications"></div>

      <div className="plannet_web_login_home_title">
        <h1>Welcome to PLANNET WEB</h1>
        
      </div>

      <div className="plannet_web_login_home_subtitile">
        <h4>You can login to PLANNET WEB</h4>
      </div>

      <div className="planet_web_login_form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
    </div>
  );
}

export default Login;
