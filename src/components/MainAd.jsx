import React, { useEffect, useState } from 'react'

import mainAdLeft from "../assets/img/mainAdLeft.png"
import mainAdRight from "../assets/img/mainAdRight.png"

import { mainAdImage } from "../constants/mainIndex"


const MainAd = () => {

  const loopData = [...mainAdImage, ...mainAdImage];
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);   // 트랜지션 방법 : 기본 - 애니메이션 있도록
  const maxIndex = mainAdImage.length;
  const currentPage = ((index % maxIndex) + maxIndex) % maxIndex + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    if (index === maxIndex) {                         // 현 페이지가 마지막 페이지일 경우 (transition이 끝난 후 실행)
      setTimeout(() => {                            // ✨setTimeout (실행함수, 시간) : 일정 시간 뒤에 코드를 실행
        setTransition(false);                     // 애니메이션 비활성화
        setIndex(0);                                 // 0 페이지로 이동

        requestAnimationFrame(() => {               // ✨다음 화면이 그려질 때 실행
          setTransition(true);                    // 다시 애니메이션 활성화
        });
      }, 500);                                      // transition 시간과 맞추기
    }
    // eslint-disable-next-line
  }, [index]);

  const nextSlide = () => {
    setTransition(true);
    setIndex((prev) => (prev + 1));
  };
  const prevSlide = () => {
    setTransition(true);
    setIndex((prev) => (prev - 1));
  };

  return (
    <div id="mainAd">
      <div className="mainAd__inner">
        <div className="mainAd__view">
          <div className="mainAd__track"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: transition ? "0.5s ease" : "none",
            }}>
            {loopData.map((img, key) => (
              <div className="slideItem" key={key}>
                <img src={img} alt={`배너 이미지${key}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mainAd__arrow">
          <button className='arrowButton' onClick={prevSlide}>
            <img className='left' src={mainAdLeft} alt="왼쪽 화살표" />
          </button>
          <span>
            {currentPage} / {mainAdImage.length}
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