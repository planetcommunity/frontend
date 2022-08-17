import React, { Component } from 'react'
import api from '../api/api'

 
class RegistrationService extends Component {
 
    userRegistration(userObj){
        return api.post('/user/registration', userObj)
    }

}

export default RegistrationService
