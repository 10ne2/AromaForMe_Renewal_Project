import React from 'react'

import wideImg from "../assets/img/mainAdImg1.png"
import graph from "../assets/img/mainAdImg1.png"


import { incense, incenseDesc, relax, plant, historyDesc, historyImg, oilUse, method } from "../constants/detailIndex"

const DetailProExplain = () => {
  return (
    <div id='proExplain'>
      <div className="proExplain__inner">
        <div className="proExplain__top">
          <div className="proExplain__top__inner">
            <div className="proExplain__incense">
              <h2><em>'향'</em>의 특색</h2>
              <span>깨끗하고 청결한 약초 향이 나고, 머리가 맑아지는 신선하고 샤프한 향</span>
              <div className="wideImg">
                <img src={wideImg} alt='와이드이미지' />
              </div>
              <div className="incense">
                <div className="incenseCategory">
                  {incense.map((incen, key) => (
                    <div className="incenItem" key={key}>
                      <div className="opacity"></div>
                      <skin className="name">{incen.name}</skin>
                      <skin className="desc">{incen.desc}</skin>
                      <img src={incen.img} alt='카테고리이미지' />
                    </div>
                  ))}
                </div>
                <div className="incenseExplain">
                  {incenseDesc[0][0].map((incense, key) => (
                    <span
                      className={`
                        ${key === 0 ? "first" : ""}
                        ${key % 2 === 1 ? "bold" : ""}
                      `}
                    >{incense}</span>
                  ))}
                  <br />
                  <br />
                  {incenseDesc[0][1].map((incense, key) => (
                    <span
                      className={`
                        ${key === 0 ? "first" : ""}
                        ${key % 2 === 1 ? "bold" : ""}
                      `}>
                      {incense}</span>
                  ))}
                  <br />
                  <br />
                  {incenseDesc[0][2].map((incense, key) => (
                    <span
                      className={`
                        ${key === 0 ? "first" : ""}
                      `}>
                      {incense}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="proExplain__relax">
              <h2><em>'치유'</em>의 특성</h2>
              <span className='line'></span>
              <div className="relaxItem">
                {relax.map((relax, key) => (
                  <div className="item" key={key}>
                    <h2>{relax.num}</h2>
                    <div className="imgBox">
                      <img src={relax.img} alt={`치유이미지${relax.num}`} />
                    </div>
                    <span className='name'>{relax.name}</span>
                    <span className='desc'>{relax.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="proExplain__plant">
              <h2><em>'식물'</em>의 특성</h2>
              <span className='line'></span>
              <div className="plantItem">
                {plant.map((plant, key) => (
                  <div className="item" key={key}>
                    <h2>{plant.num}.</h2>
                    <div className="descList">
                      <h3 className='name'>{plant.name}</h3>
                      <div className="desc">
                        {plant.desc.map((text, i) => (
                          <span
                            className={`
                          ${i % 2 === 1 ? "bold" : ""}
                          ${i === 0 ? "first" : ""}
                        `}
                            key={i}
                          >{text}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="proExplain__history">
              <h2>식물의 <em>'역사'</em></h2>
              <span className='line'></span>
              <div className="body">
                <div className="teaHistoryBody">
                  <div className="teaTreeDesc">
                    {historyDesc[0].map((tea, key) => (
                      <span
                        className={`
                      ${key === 0 ? "word" : ""}
                      ${key === 2 ? "bold" : ""}
                    `}
                      >{tea}</span>
                    ))}
                  </div>
                  <div className="teaTreeImgSize">
                    <img src={historyImg[0]} alt='역사이미지1' />
                  </div>
                </div>
                <div className="sevenHistoryBody">
                  <div className="sevenImgSize">
                    <img src={historyImg[1]} alt='역사이미지1' />
                  </div>
                  <div className="sevenDesc">
                    <span className='word'>{historyDesc[1]}</span>
                    {historyDesc[2].map((seven, key) => (
                      <span
                        className={`
                      ${key === 0 ? "first" : ""}
                      ${key === 1 ? "bold" : ""}
                    `}
                      >{seven}</span>
                    ))}
                  </div>
                </div>
                <div className="nineHistoryBody">
                  <div className="nineDesc">
                    <span className='word'>{historyDesc[3]}</span>
                    {historyDesc[4].map((two, key) => (
                      <span
                        className={`
                      ${key === 0 ? "first" : ""}
                      ${key % 2 === 1 ? "bold" : ""}
                    `}
                      >{two}</span>
                    ))}
                    <br />
                    <br />
                    <br />
                    <span className='word'>{historyDesc[5]}</span>
                    {historyDesc[6].map((three, key) => (
                      <span
                        className={`
                      ${key === 0 ? "first" : ""}
                      ${key % 2 === 1 ? "bold" : ""}
                    `}
                      >{three}</span>
                    ))}
                  </div>
                  <div className="nineImgSize">
                    <img src={historyImg[2]} alt='역사이미지1' />
                  </div>
                </div>
                <div className="modernHistoryBody">
                  <div className="modernDesc">
                    <span className='word'>{historyDesc[7]}</span>
                    {historyDesc[8].map((modern, key) => (
                      <span
                        className={`
                      ${key === 0 ? "first" : ""}
                    `}
                      >{modern}</span>
                    ))}
                    <br />
                    <br />
                    {historyDesc[9].map((modern, key) => (
                      <span
                        className={`
                      ${key === 0 ? "first" : ""}
                      ${key === 1 ? "bold" : ""}
                    `}
                      >{modern}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="proExplain__bottom">
          <div className="proExplain__bottom__inner">
            <div className="proExplain__oil">
              <div className="title">
                <h2>에센셜 오일 사용법</h2>
                <span>{oilUse[0]}</span>
              </div>
              <div className="oil">
                <h2>
                  <em className='aroma'>아로마오일</em>은 크게&nbsp;
                  <em className='underLine greenLine'>'베이스오일'</em>과&nbsp;
                  <em className='underLine brownLine'>'에센셜오일'</em>로 나뉩니다.
                </h2>
                <div className="graph">
                  <div className="graphImgSize">
                    <img src={graph} alt='원형' />
                  </div>
                  <div className="oilDesc">
                    {oilUse[1].map((oil, key) => (
                      <span className={key === 0 ? "green" : ""}>{oil}</span>
                    ))}
                    <br />
                    <br />
                    {oilUse[2].map((oil, key) => (
                      <span className={key === 0 ? "brown" : ""}>{oil}</span>
                    ))}
                  </div>
                </div>
                <div className="lastDesc">
                  {oilUse[3].map((oil, key) => (
                    <span className={key === 1 ? "bold" : ""}>{oil}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="proExplain__oilMethod">
              {method.map((method, key) => (
                <div className="item">
                  <div className="title">
                    <h2
                      className={`
                          ${key === 0 ? "brown" : ""}
                          ${key === 1 ? "green" : ""}
                        `}
                    >{method.num}</h2>
                    <h2
                      className={`
                          ${key === 0 ? "brown" : ""}
                          ${key === 1 ? "green" : ""}
                        `}
                    >{method.name}</h2>
                  </div>
                  <div className={`
                          ${key === 2 ? "none" : ""}
                          itemImgSize
                      `}>
                    <img src={method.img} alt="오일사용법이미지" />
                  </div>

                  <div className="methodDesc">
                    {method.desc1.map((desc1, i) => (
                      <span
                        className={`
                            ${i % 2 === 1 ? "bold" : ""}
                            ${key === 0 && i === 3 ? "brown" : ""}
                            ${key === 1 && i === 1 ? "green" : ""}
                          `}
                      >{desc1}</span>
                    ))}
                  </div>
                  <div className="arrow">
                    <img
                      src={method.arrowImg}
                      alt="화살표"
                      className='arrow' />
                  </div>

                  <div className="methodDesc">
                    {method.desc2.map((desc2, i) => (
                      <span
                        className={`
                            ${i % 2 === 1 ? "bold" : ""}
                            ${key === 1 && i === 1 ? "green" : ""}
                          `}
                      >{desc2}</span>
                    ))}
                  </div>
                  <div className="arrow">
                    <img
                      src={method.arrowImg}
                      alt="화살표"
                      className={`
                        arrow
                        ${key === 1 ? "none" : ""}
                      `} />
                  </div>
                  <div className="methodDesc">
                    {method.desc3.map((desc3, i) => (
                      <span
                        className={`
                            ${i % 2 === 1 ? "bold" : ""}
                            ${key === 0 && i === 1 ? "brown" : ""}
                          `}
                      >{desc3}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DetailProExplain