import React from 'react'

import leftArrow from "../assets/img/mainAdLeft.png"
import rightArrow from "../assets/img/mainAdRight.png"

import { boardImg, brandCate } from "../constants/listIndex"
import MiniCategory from './common/MiniCategory'

const ListCategory = () => {
  return (
    <div id='listCategory'>
      <div className="listCategory__inner">
        <MiniCategory />
        <div className="listCategory__brand">
          <div className="cate">
            <h2>닥터티피</h2>
            <span className='line'></span>
            <ul>
              <li>{brandCate[0]}</li>
              <li>{brandCate[1]}</li>
              <li>{brandCate[2]}</li>
              <li>{brandCate[3]}</li>
              <li>{brandCate[4]}</li>
              <li>{brandCate[5]}</li>
            </ul>
          </div>
          <div className="board">
            <div className="arrow">
              <div className="button">
                <img className='left' src={leftArrow} alt='왼쪽 화살표' />
              </div>
              <span>1/5</span>
              <div className="button">
                <img className='right' src={rightArrow} alt='오른쪽 화살표' />
              </div>
            </div>
            <div className="view">
              <div className="track">
                {boardImg.map((img, key) => (
                  <div className="item" key={key}>
                    <img src={img} alt='광고이미지' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListCategory