import React, { Component } from 'react'
import api from '../api/api'

 
export class RegistrationService {
 
    static userRegistration(userObj){
        console.log(userObj);
        return api.post('/user/registration', userObj)
    }

    static verfyEmail(emailAddress){
        console.log(emailAddress);
        return api.get('/user/emailValidation', emailAddress)
    }

    static verfyAlies(alies){
        console.log(alies);
        return api.get('/user/alisValidation', alies)
    }



}

export default RegistrationService;
