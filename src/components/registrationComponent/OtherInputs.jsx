import React, {useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Home from '../../assets/home.png'
import Building from '../../assets/building.png'
import Hexagon from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const OtherInputs = ({responseErrorMessage, isError, password, submitRegistration}) => {

  const session = window.sessionStorage;

  let [user, setUser] = useState({
    userObj : {language: "",
    country: "",
    cap: "",
    gpsLocation: "",
    favoriteSocial: "",
    socialLink: "",
    email: session.getItem("email"),
    alias: session.getItem("alies"),
    password: password}
  });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      userObj:{...user.userObj,[e.target.name] : e.target.value}
    });
  }

  return (
    <>
    <div className="plannet_web_login">
      <img src={Hexagon} alt="Hexagon" className="hexagon-shape" />
    {isError && (
        <div className="plannet_web_notifications">
          <Alert key="danger" variant="danger">
            {responseErrorMessage}
          </Alert>
        </div>
      )}


      <div className="plannet_web_logins_item_content d-flex flex-column align-items-center">
        <div className="plannet_web_logins_item_header">
          <h1>Registration</h1>
          <h3>Confirmation</h3>
        </div>

        <div className="plannet_web_logins_item_form my-4">
          <div className="mb-2">
            {/* <label>Language</label> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                name='language'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Language" /> 
              </Form.Group>
          </div>
          <div className="mb-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='country'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Country" />
              </Form.Group>
          </div>
          <div className="mb-2">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='cap'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Cap" />
              </Form.Group>
          </div>
          <div className="mb-2">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='gpsLocation'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="GPS Location" />
              </Form.Group>
          </div>
          <div className="mb-2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='favoriteSocial'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Favorie Social" />
              </Form.Group>
          </div>
          <div className="mb-2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='socialLink'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Link Social" />
              </Form.Group>
            </div>
          <div className="mb-2">
          <Button 
            className='w-100' onClick={() => submitRegistration(user.userObj)} variant="primary">Submit</Button>
          </div>
        </div>

        <div className="plannet_web_logins_item_footer">
          <h4><Link to="/">If you have already account? Login</Link></h4>
          {/* <h4>Anti boot login question</h4>
          <div className="d-flex mt-2 align-items-center justify-content-center">
            <a href="#"><img src={Home} alt="Home" /></a>
            <a href="#" className="ms-3"><img src={Building} alt="Home" /></a>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default OtherInputs;
