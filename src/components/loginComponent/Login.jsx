import React from "react";
import "./login.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, NavLink } from "react-router-dom";

import Home from '../../assets/home.png'
import Building from '../../assets/building.png'
import Hexagon from '../../assets/logo.png'

function Login() {
  const session = window.sessionStorage;
  console.log("session storage email in login page", session.getItem("email"));
  return (
    <div className="plannet_web_login">
      <img src={Hexagon} alt="Hexagon" className="hexagon-shape" />
      <div className="plannet_web_notifications"></div>

      <div className="plannet_web_logins_item_content d-flex flex-column align-items-center">
        <div className="plannet_web_logins_item_header">
          <h1>Login Title</h1>
          <h3>Login Subtitle</h3>
        </div>

        <div className="plannet_web_logins_item_form">
          <div className="mb-2">
            <label>ALISA</label>
            <Form.Control type="email" />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <Form.Control type="password" />
          </div>
        </div>

        <div className="plannet_web_logins_item_footer">
          <h4><Link to="/">forgot password?</Link></h4>
          <h4><Link to="/register">Don't have an account? Sign Up</Link></h4>
          {/* <h4>Anti boot login question</h4>
          <div className="d-flex mt-2 align-items-center justify-content-center">
            <a href="#"><img src={Home} alt="Home" /></a>
            <a href="#" className="ms-3"><img src={Building} alt="Home" /></a>
          </div> */}
        </div>
      </div>

      {/* <div className="plannet_web_logins_item">
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
            <Card.Text>
              <Form.Text>
                If you are not a member{" "}
                <NavLink to="/register">Register Here</NavLink>
              </Form.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      </div> */}
    </div>
  );
}

export default Login;
