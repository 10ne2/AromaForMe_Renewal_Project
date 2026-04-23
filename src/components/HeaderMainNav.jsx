import React from 'react'

import mainNavHeart from "../assets/img/mainNavHeart.png"
import mainNavShop from "../assets/img/mainNavShop.png"

const HeaderMainNav = () => {
  return (
    <nav id='headerMainNav'>
      <div className="headerMainNav__inner">
          <div className="nav">
            <ul>
              <li>유형별</li>
              <li>고민별</li>
              <li>라인별</li>
              <li>프로모션</li>
              <li>이벤트</li>
              <li>허브이야기</li>
            </ul>
          </div>
          <div className="my">
            <img src={mainNavHeart} alt='찜목록'/>
            <img src={mainNavShop} alt='장바구니'/>
          </div>
        </div>
    </nav>
  )
}

export default HeaderMainNav