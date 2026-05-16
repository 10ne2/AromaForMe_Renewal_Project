import React from 'react'

import logo from '../assets/img/footerLogo.png'
import { Link } from 'react-router-dom'

import { companyInfo, customerInfo } from "../constants/footerIndex"

const FooterInfo = () => {
  return (
    <div id='footerInfo'>
      <div className="footerInfo__inner">
        <div className="footerInfo__com">
          <Link to="/" className="logo">
            <img src={logo} alt='로고' />
          </Link>
          <div className="companyInfo">
            <span>{companyInfo}</span>
          </div>
        </div>
        <div className="footerInfo__cus">
          <h3>{customerInfo[0]}</h3>
          <h1>{customerInfo[1]}</h1>
          <span>{customerInfo[2]}</span>
          <span>{customerInfo[3]}</span>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo