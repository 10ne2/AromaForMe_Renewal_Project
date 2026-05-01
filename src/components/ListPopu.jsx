import React from 'react'

import leftArrow from "../assets/img/mainPopuTopTenLeft.png"
import rightArrow from "../assets/img/mainPopuTopTenRight.png"
import TopTenItem from './common/TopTenItem'

import { listPopu } from "../constants/listIndex"

const ListPopu = () => {
  return (
    <div id='listPopu'>
      <div className="listPopu__inner">
        <h2 className="listPopu__title">
          닥터타피 인기 모음
        </h2>
        <div className="listPopu__product">
          <div className="arrow">
            <img src={leftArrow} alt='왼쪽 방향키' />
            <img src={rightArrow} alt='오른쪽 방향키' />
          </div>
          <div className="show">
            <div className="track">
              {listPopu.map((pop, key) => (
                <TopTenItem
                  key={key}
                  className="item"
                  num={pop.num}
                  img={pop.img}
                  name={pop.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListPopu