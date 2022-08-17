import React from 'react'
import { useState } from 'react';
import RegistrationService from '../../services/registrationservice';

function Registration() {

  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e) => {
    const userDetails = {firstName:firstName}

    e.preventDefault();
    RegistrationService.userRegistration(userDetails);

  }


  return (
    <div>
      <h1>Registration</h1>
    </div>
  )
}

export default Registration;
