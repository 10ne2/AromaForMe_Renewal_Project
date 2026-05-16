import React from 'react'

import star1 from "../assets/img/reviewStar1.png"
import star2 from "../assets/img/reviewStar2.png"

import CheckBox from "../components/common/CheckBox"

import { graph, reviewMent, reviewData } from "../constants/detailIndex"

const DetailReview = () => {
  return (
    <div id='detailReview'>
      <div className="detailReview__inner">
        <div className="detailReview__total">
          <div className="totalStar">
            <span>총 172 건</span>
            <h2>4.7<em> 점</em></h2>
            <div className="star">
              <img src={star1} alt='완별' />
              <img src={star1} alt='완별' />
              <img src={star1} alt='완별' />
              <img src={star1} alt='완별' />
              <img src={star2} alt='반별' />
            </div>
          </div>
          <div className="totalGraph">
            <div className="graph">
              {graph.map((graph, key) => (
                <div className="item" key={key}>
                  <div className="background">
                    <div
                      className="backgroundFill"
                      style={{ height: `${graph.per}%` }}
                    ></div>
                  </div>
                  <span>{graph.point}점</span>
                </div>
              ))}
            </div>
            <span>약 <em>{graph[0].per}%</em>의 사람이 5점을 선택했습니다.</span>
          </div>
          <div className="totalWrite">
            {reviewMent.map((ment, key) => (
              <span className={key === 1 ? "bold" : ""}>{ment}</span>
            ))}
            <button>후기 작성</button>
          </div>
        </div>
        <div className="detailReview__list">
          <div className="listCheck">
            <CheckBox title="일반 후기" name="review"/>
            <CheckBox title="포토 후기" name="review"/>
          </div>
          <div className="listContents">
            {reviewData.map((review, key) => (
              <div className="item">
                <div className="top">
                  <div className="image">
                    {review.star.map((star, i) => (
                      <img src={star} alt='star' key={i} />
                    ))}
                  </div>
                  <span className='id'>{review.id}</span>
                  <span className='date'>{review.date}</span>
                </div>
                <div className="body">
                  <div className="bodyTitle">
                    <h3>{review.title}</h3>
                    <div className="subInfo">
                      <span className='sex'>{review.sex}</span>
                      <span className='age'>{review.age}</span>
                    </div>
                    {/* <span>{review.desc}</span> */}
                  </div>
                  <button>펼쳐보기</button>
                </div>
              </div>
            ))}
          </div>
          <div className="listPage"></div>
        </div>
      </div>
    </div>
  )
}

export default DetailReview