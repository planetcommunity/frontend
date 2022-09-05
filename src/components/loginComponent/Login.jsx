import React from "react";
import "./login.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Login() {
  const session = window.sessionStorage;
  console.log('session storage email in login page', session.getItem('email'));
  return (
    <div className="plannet_web_login">
      <div className="plannet_web_notifications"></div>
      <div className="plannet_web_logins_item">
        <Card className="text-center">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>
            </Card.Text>
            <Button variant="primary">Next</Button>
            <Card.Text><Form.Text>If you are not a member <a href="/register">Register here</a></Form.Text></Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
