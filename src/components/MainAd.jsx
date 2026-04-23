import React, { useEffect, useState } from 'react'

import mainAdImg1 from "../assets/img/mainAdImg1.png"
import mainAdImg2 from "../assets/img/mainAdImg2.png"
import mainAdImg3 from "../assets/img/mainAdImg3.png"
import mainAdImg4 from "../assets/img/mainAdImg4.png"
import mainAdLeft from "../assets/img/mainAdLeft.png"
import mainAdRight from "../assets/img/mainAdRight.png"

const mainAdImage = [ mainAdImg1, mainAdImg2,mainAdImg3, mainAdImg4]


const MainAd = () => {

  const [index, setindex] = useState(0);

  useEffect (() => {
    const interval = setInterval (() => {
      setindex((prev) => (prev+1) % mainAdImage.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [])

  const getPosition = (key) => {
    if (key === index) return "center";
    if (key === (index - 1 + mainAdImage.length) % mainAdImage.length) return "left";
    if (key === (index +1) % mainAdImage.length) return "right";
    return "hidden";
  }

  const nextSlide = () => {
    setindex((prev) => (prev + 1) % mainAdImage.length);
  };
  const prevSlide = () => {
    setindex((prev) => (prev - 1 + mainAdImage.length) % mainAdImage.length);
  };

  return (
    <banner id="mainAd">
      <div className="mainAd__inner">
        <div className="mainAd__track">
          {mainAdImage.map((img, key) => (
            <div className={`slideItem ${getPosition(key)}`} key={key}>
                <img src={img} alt={`배너 이미지${key}`}/>
            </div>
        ))}
        </div>
        <div className="mainAd__arrow">
          <button className='arrowButton' onClick={prevSlide}>
            <img className='left' src={mainAdLeft} alt="왼쪽 화살표"/>
          </button>
            <span>{index+1} / {mainAdImage.length}</span>
          <button className='arrowButton' onClick={nextSlide}>
            <img className='right' src={mainAdRight} alt="오른쪽 화살표"/>
          </button>
        </div>
      </div>
    </banner>
  )
}

export default MainAd