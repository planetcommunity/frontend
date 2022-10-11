import React, {useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
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
    {isError && (
        <div className="plannet_web_notifications">
          <Alert key="danger" variant="danger">
            {responseErrorMessage}
          </Alert>
        </div>
      )}

      <div className="plannet_web_logins_item">
        <Card className="text-center">
          <Card.Header>Registration Confirmation</Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                name='language'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Language" /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='country'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Country" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='cap'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Cap" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='gpsLocation'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="GPS Location" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='favoriteSocial'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Favorie Social" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                name='socialLink'
                onChange={(e) => handleOnChange(e)}
                type="text" placeholder="Link Social" />
              </Form.Group>

            </Card.Text>
            <Button onClick={() => submitRegistration(user.userObj)} variant="primary">Submit</Button>
            
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  )
}

export default OtherInputs;
