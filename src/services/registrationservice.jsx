import React, { Component } from 'react'
import api from '../api/api'

 
export class RegistrationService {
 
    static userRegistration(userObj){
        console.log(userObj);
        return api.post('/api/v1/users/registeration', userObj)
    }

    static verfyEmail(emailAddress){
        console.log(emailAddress);
        return api.get('/api/v1/users/email?email='+ emailAddress)
    }

    static verfyAlies(alies){
        console.log(alies);
        return api.get('/api/v1/users/alias/'+ alies)
    }

    static verfyPinCode(pin){
        console.log("Pin is" + pin);
        return api.post('/api/v1/users/verifyCode', pin)
    }



}

export default RegistrationService;
