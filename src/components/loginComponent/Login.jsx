import React from "react";
import "./login.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Login() {
  return (
    <div className="plannet_web_login">
      <div className="plannet_web_notifications"></div>
      <div className="plannet_web_logins_item">
        <Card className="text-center">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>
            </Card.Text>
            <Button variant="primary">Login</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
