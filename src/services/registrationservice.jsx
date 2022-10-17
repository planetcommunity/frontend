import React, { Component } from 'react'
import api from '../api/api'

 
export class RegistrationService {
 
    static userRegistration(userObj){
        return api.post('/api/v1/users/registeration', userObj)
    }

    static verfyEmail(emailAddress){
        return api.get(`/api/v1/users/email?email=${emailAddress}`)
    }

    static verfyAlies(alies){
        return api.get(`/api/v1/users/alias/${alies}`)
    }

    static verfyPinCode(pin){
        return api.post('/api/v1/users/verifyCode', pin)
    }



}

export default RegistrationService;
