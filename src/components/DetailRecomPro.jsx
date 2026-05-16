import React from 'react'
import MainProductItem from './common/MainProductItem'

import { recomPro } from "../constants/detailIndex"

const DetailRecomPro = () => {
  return (
    <div id='recomPro'>
      <div className="recomPro__inner">
        <h2 className='recomPro__title'>관련 추천 상품</h2>
        <div className="recomPro__pro">
          {recomPro.map((recom, key) => (
            <div className="item">
              <MainProductItem
                img={recom.img}
                title={recom.title}
                price={recom.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailRecomPro