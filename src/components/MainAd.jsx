import React, { useEffect, useState } from 'react'

import mainAdLeft from "../assets/img/mainAdLeft.png"
import mainAdRight from "../assets/img/mainAdRight.png"

import { mainAdImage } from "../constants/mainIndex"


const MainAd = () => {

  const [index, setindex] = useState(1);
  const [transition, setTransition] = useState(true);   // 트랜지션 방법 : 기본 - 애니메이션 있도록

  const extendedImages = [
    mainAdImage[mainAdImage.length - 1],                      // 이미지 배열 마지막
    ...mainAdImage,                                           // 이미지 배열들 1, 2, 3, 4
    mainAdImage[0],                                           // 이미지 배열 첫번째
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setindex((prev) => (prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [])

  const transitionEnd = () => {
    if (index === extendedImages.length - 1) {
      setTransition(false);
      setindex(1);
    }
    if (index === 0) {
      setTransition(false);
      setindex(mainAdImage.length);
    }
  }

  const nextSlide = () => {
    setTransition(true);
    setindex((prev) => (prev + 1));
  };
  const prevSlide = () => {
    setTransition(true);
    setindex((prev) => (prev - 1));
  };

  return (
    <div id="mainAd">
      <div className="mainAd__inner">
        <div className="mainAd__track"
          onTransitionEnd={transitionEnd}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: transition ? "0.5s ease" : "none",
          }}>
          {extendedImages.map((img, key) => (
            <div className="slideItem" key={key}>
              <img src={img} alt={`배너 이미지${key}`} />
            </div>
          ))}
        </div>
        <div className="mainAd__arrow">
          <button className='arrowButton' onClick={prevSlide}>
            <img className='left' src={mainAdLeft} alt="왼쪽 화살표" />
          </button>
          <span>
            {((index - 1 + mainAdImage.length) % mainAdImage.length) + 1} / {mainAdImage.length}
          </span>
          <button className='arrowButton' onClick={nextSlide}>
            <img className='right' src={mainAdRight} alt="오른쪽 화살표" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainAd;