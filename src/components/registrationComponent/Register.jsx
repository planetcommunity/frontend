import React, { useState } from "react";
import "./register.css";
import "../../containers/RegistrationInputFieldsComponent/input.css";
import { useRef } from "react";
import RegistrationService from "../../services/registrationservice";
import validator from "validator";
import VerifyEmail from '../registrationComponent/VerifyEmail'
import VerifyInitialAlies from '../registrationComponent/VerifyInitialAlies'
import PasswordConfirmation from '../registrationComponent/PasswordConfirmation'
import OtherInputs from '../registrationComponent/OtherInputs'
import { useNavigate } from "react-router-dom";

function Register() {
  const [responseErrorMessage, setResponseErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const emailInputRef = useRef();
  const session = window.sessionStorage;
  const [cardContent, setCardContent] = useState();
  const navigate = useNavigate()

  const submitRegistration = (user) =>{
    RegistrationService.userRegistration(user).then(
      (res)=>{
        navigate("/code-verification")
      },(error) => {
        
        if (error.code === "ERR_NETWORK") {
          changeOtherInputsCardContent("Network Busy!... Please try again shortly", true, "");
        
        } else {
          changeOtherInputsCardContent(error.message,false, "");
          
        }
      }
    )
  }
  
  const verifyPassword = (password)=>{
    changeOtherInputsCardContent("", false, password);
  }

  const verifyAlies = (alies) => {
    session.setItem("alies", alies);
    if (alies.length <= 0) {
      console.log("slies is null");

      alert("Enter alies and try again");
    }else{
      changeConfirmPasswordCardContent();
    
    RegistrationService.verfyAlies(alies).then(
      (res) => {
        console.log("response is" + res.data);
        session.setItem("alias", alies)
        changeConfirmPasswordCardContent();
      },
      (err) => {
       
        if (err.code === "ERR_NETWORK") {
          changeAlieasCardContent("Network Busy!... Please try again shortly", false)
        } else {
          changeAlieasCardContent(err.message, false)
        }
        setIsError(true);
        setTimeout(() => {
          changeAlieasCardContent("", false)
        }, 3000);
       
      }
    );
  }
  };

  const verifyEmailAddress = (emailAddress) => {
    console.log(emailAddress);
    
    if (emailAddress.length <= 0) {
      console.log("email is null");

      changeEmailCardContent("Enter Email and try again", false)
      setTimeout(() => {
          changeEmailCardContent("", false)
        }, 2000);
    }else if (!validator.isEmail(emailAddress)){
      
      changeEmailCardContent("Enter Valid Email and try again", false)
      setTimeout(() => {
        changeEmailCardContent("", false)
      }, 2000);
    }else{
      changeAlieasCardContent("", false)
      
    RegistrationService.verfyEmail(emailAddress).then(
      (res) => {
        console.log("response is" + res.data);
        session.setItem("email", emailAddress);
        changeAlieasCardContent("", false)
        changeAlieasCardContent("", false)
      },
      (err) => {
        console.log(err);
    
        if (err.code === "ERR_NETWORK") {
          changeEmailCardContent("Network Busy!... Please try again shortly", true)
          
        } else {
          changeEmailCardContent(err.message, true)
          
        }
        setIsError(true);
        setTimeout(() => {
          changeEmailCardContent("", false)
        }, 3000);
    
      }
    );
  }
  };

  useState(()=>{
    setCardContent(<VerifyEmail
        verifyEmailAddress={verifyEmailAddress}
        responseErrorMessage={responseErrorMessage}
        emailInputRef={emailInputRef}
        isError={isError}
      />)}
    );

    const changeOtherInputsCardContent = (responseErrorMessage, isError, password) =>{
      setCardContent(<OtherInputs
        submitRegistration={submitRegistration}
      responseErrorMessage={responseErrorMessage}
      isError={isError}
      password={password}
    />)
    }

    const changeConfirmPasswordCardContent = () =>{
      setCardContent(<PasswordConfirmation
        verifyPassword={verifyPassword}
      />)
    }

  const changeEmailCardContent = (responseErrorMessage, isError) =>{
    setCardContent(<VerifyEmail
    verifyEmailAddress={verifyEmailAddress}
    responseErrorMessage={responseErrorMessage}
    isError={isError}
  />)
  }


  const changeAlieasCardContent = (responseErrorMessage, isError) =>{
    setCardContent(<VerifyInitialAlies
    verifyAliesData={verifyAlies}
    responseErrorMessage={responseErrorMessage}
    isError={isError}
  />)
  }
    

  return (
    < >
      {cardContent}
    </>
  );
}





export default Register;