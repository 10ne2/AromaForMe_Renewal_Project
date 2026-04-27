import React from 'react'

import MainSectionTitleMore from './common/MainSectionTitleMore'
import MainProductItem from './common/MainProductItem'

import heart from "../assets/img/heart.png"
import pay from "../assets/img/pay.png"

import { bestRecomImg } from "../constants/mainIndex"

const MainBestRecom = () => {
  return (
    <div id='bestRecom'>
      <div className="bestRecom__inner">
        <MainSectionTitleMore title="베스트 추천 상품" />
        <div className="bestRecom__product">
          {bestRecomImg.map((best, key) => (
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
                img={best.img}
                title={best.title}
                prePrice={best.prePrice}
                price={best.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainBestRecom