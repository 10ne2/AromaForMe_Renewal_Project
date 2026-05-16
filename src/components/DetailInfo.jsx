import React from 'react'
import MiniCategory from './common/MiniCategory'

import star1 from '../assets/img/reviewStar1.png'
import star2 from '../assets/img/reviewStar2.png'
import share from '../assets/img/share.png'
import heart from '../assets/img/detailHeart.png'
import naver from '../assets/img/naverPay.png'

import { proInfo } from "../constants/detailIndex"

const DetailInfo = () => {
  return (
    <div id='detailInfo'>
      <div className="detailInfo__inner">
        <MiniCategory />
        {proInfo.map((pro, key) => (
          <div className="detailInfo__product">
            <div className="detailInfo__image">
              <div className="image">
                <span>이미지 위에 마우스를 올려보세요.</span>
                <img src={pro.img} alt='상품이미지' />
              </div>
              <div className="imageList">
                <span>◀</span>
                <div className="imgView">
                  <img src={pro.img} alt="이미지" />
                </div>
                <span>▶</span>
              </div>
              <div className="review">
                <span>고객 리뷰</span>
                <div className="star">
                  <img src={star1} alt='완별' />
                  <img src={star1} alt='완별' />
                  <img src={star1} alt='완별' />
                  <img src={star1} alt='완별' />
                  <img src={star2} alt='반별' />
                </div>
                <span>{pro.review}</span>
                <span>({pro.reviewCount}건)</span>
              </div>
            </div>
            <div className="detailInfo__info">
              <div className="title">
                <div className="name">
                  <h2>{pro.name}</h2>
                  <h2>{pro.price}원</h2>
                </div>
                <img src={share} alt="공유" />
              </div>
              <div className="colorTag">
                {pro.colorTag.map((color, key) => (
                  <span>{color}</span>
                ))}
              </div>
              <div className="tag">
                <h3>관련태그</h3>
                <ul>
                  {pro.hashTag.map((hash, key) => (
                    <li>{hash}</li>
                  ))}
                </ul>
              </div>
              <span className='line'></span>
              <div className="deli">
                <h3>배송비</h3>
                <span>2,500원 (2,000원 이상 무료배송)</span>
              </div>
              <div className="mile">
                <h3>마일리지</h3>
                <span>구매 시 최대 2% 적립</span>
              </div>
              <div className="proCount">
                <h3>{pro.name}</h3>
                <div className="count">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
              <div className="total">
                <h3>상품금액 합계</h3>
                <h3>{pro.price}원</h3>
              </div>
              <span className='line'></span>
              <div className="pay">
                <div className="heart">
                  <img src={heart} alt='찜' />
                </div>
                <div className="cart lastButton">
                  <h3>장바구니</h3>
                </div>
                <div className="pay lastButton">
                  <h3>바로구매</h3>
                </div>
              </div>
              <div className="naverPay">
                <img src={naver} alt='네이버페이' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailInfo