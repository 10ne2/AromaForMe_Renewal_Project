import React, { useEffect, useState } from 'react'
import MainSectionTitleMore from './common/MainSectionTitleMore'

import leftArrow from "../assets/img/mainPopuTopTenLeft.png"
import rightArrow from "../assets/img/mainPopuTopTenRight.png"

import { typeRecom } from "../constants/mainIndex"

const MainTypeRecom = () => {

  const loopData = [...typeRecom, ...typeRecom];
  const [page, setPage] = useState(0);
  const pageSize = 2;
  const maxPage = Math.ceil(typeRecom.length / pageSize);
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => prev + 1);
    }, 8000)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (page === maxPage) {
      setTimeout(() => {
        setIsTransition(false);
        setPage(0);
        requestAnimationFrame(() => {
          setIsTransition(true)
        });
      }, 500);
    }
    // eslint-disable-next-line
  }, [page])

  const prevSlice = () => {
    setPage((prev) => prev - 1);
  }

  const nexSlice = () => {
    setPage((prev) => prev + 1);
  }

  return (
    <div id='typeRecom'>
      <div className="typeRecom__inner">
        <MainSectionTitleMore title="피부 타입별 추천 상품" />
        <div className="typeRecom__arrow">
          <img src={leftArrow} alt='왼쪽화살표' onClick={prevSlice}/>
          <img src={rightArrow} alt='오른쪽화살표' onClick={nexSlice}/>
        </div>
        <div className="typeRecom__product">
          <div className="view">
            <div className="track"
              style={{
                transform: `translateX(-${page * 100}%)`,
                transition: isTransition ? "transform 0.5s ease" : "none"
              }}
            >
              {loopData.map((item, key) => (
                <div className="item" key={key}>
                  <div className="top">
                    <div className="back">
                      <img src={item.backImg} alt='배경이미지' />
                    </div>
                    <div className="slogan">
                      <h2>{item.slogan[0]}<br />{item.slogan[1]}</h2>
                    </div>
                  </div>
                  <div className="list">
                    <div className="listItem">
                      <div className="img">
                        <img src={item.firstImg} alt='상품이미지' />
                      </div>
                      <div className="info">
                        <span className='title'>{item.firstTitle}</span>
                        <span className='price'>{item.firstPrice}</span>
                      </div>
                    </div>
                    <div className="listItem">
                      <div className="img">
                        <img src={item.secondImg} alt='상품이미지' />
                      </div>
                      <div className="info">
                        <span className='title'>{item.secondTitle}</span>
                        <span className='price'>{item.secondPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        <div className="typeRecom__page">
          <div className={page === 0 || page === 3 ? "active" : ""}
            onClick={() => setPage(0)}></div>
          <div className={page === 1 ? "active" : ""}
            onClick={() => setPage(1)}></div>
          <div className={page === 2 ? "active" : ""}
            onClick={() => setPage(2)}></div>
        </div>
      </div>
    </div>
  )
}

export default MainTypeRecom