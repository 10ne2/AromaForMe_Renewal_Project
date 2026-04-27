import React from 'react'

import { footerNav } from "../constants/footerIndex"

const FooterNav = () => {
  return (
    <div id='footerNav'>
      <div className="footerNav__inner">
        <ul className='footerNav__title'>
          {footerNav.map((nav, key) => (
            <li key={key}>{nav}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterNav