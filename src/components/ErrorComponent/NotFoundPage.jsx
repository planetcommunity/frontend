import React from 'react'
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/error-404.png'

function NotFoundPage() {
  return (
    <div style={{ backgroundImage:`url(${PageNotFound})`
    ,backgroundRepeat:"no-repeat",
    backgroundSize:"contain"
    ,backgroundPosition: "center",
    height:500
    }}>
     
    </div>
  )
}

export default NotFoundPage
