import React from 'react'

import mainNavHeart from "../assets/img/mainNavHeart.png"
import mainNavShop from "../assets/img/mainNavShop.png"

import { mainNav } from '../constants/headerIndex'

const HeaderMainNav = () => {
  return (
    <nav id='headerMainNav'>
      <div className="headerMainNav__inner">
        <div className="nav">
          <ul>
            {mainNav.map((nav, key) => (
              <li>{nav}</li>
            ))}
          </ul>
        </div>
        <div className="my">
          <img src={mainNavHeart} alt='찜목록' />
          <img src={mainNavShop} alt='장바구니' />
        </div>
      </div>
    </nav>
  )
}

export default HeaderMainNav