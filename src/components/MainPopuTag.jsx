import React from 'react'

import tagImg from "../assets/img/mainTagImg.png"

import { tagList } from "../constants/mainIndex"

const MainPopuTag = () => {
  return (
    <div id='mainTag'>
      <div className="mainTag__inner">
        <div className="mainTag__img">
          <img src={tagImg} alt='태그좌측이미지' />
        </div>
        <div className="mainTag__tag">
          <h2>아로마포미 인기태그</h2>
          <div className="tagList">
            {tagList.map((tag, key) => (
              <span key={key}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPopuTag