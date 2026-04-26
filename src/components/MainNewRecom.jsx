import React from 'react'

import MainSectionTitleMore from './common/MainSectionTitleMore'
import MainProductItem from './common/MainProductItem'

import heart from "../assets/img/heart.png"
import pay from "../assets/img/pay.png"

import { newRecomImg } from "../constants/mainIndex"

const MainNewRecom = () => {
  return (
    <div id='newRecom'>
      <div className="newRecom__inner">
        <MainSectionTitleMore title="신제품 추천" />
        <div className="newRecom__product">
          {newRecomImg.map((newRecom, key) => (
            <div className="item" key={key}>
              <div className="hover">
                <div>
                  <img className="heart" src={heart} alt='찜' />
                </div>
                <div>
                  <img className="pay" src={pay} alt='결제하기' />
                </div>
              </div>
              <MainProductItem
                img={newRecom.img}
                title={newRecom.title}
                prePrice={newRecom.prePrice}
                price={newRecom.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainNewRecom