import React, { useEffect, useState, useRef } from 'react'

import logo from "../assets/img/logo.png"
import search from "../assets/img/search.png"
import searchAdLeftArrow from "../assets/img/searchAdLeftArrow.png"
import searchAdRightArrow from "../assets/img/searchAdRightArrow.png"

import { searchText, searchAdText }  from "../constants"




const HeaderLogoSearch = () => {

  const [open, setOpen] = useState(false);                           // 검색창 클릭시 창이 open
  const [index, setIndex] = useState(0);                             // 이미지 순서 기억하기 위함  
  const wrapperRef = useRef(null);                                   // dom 영역을 기억하기 위함 >> opne false를 위함

  //----- 검색창 광고 슬라이드
  useEffect (() => {
    const interval = setInterval(() => {          
      setIndex((prev) => (prev + 1) % searchAdText.length);  
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);      
  // setInterval(실행할 함수, 시간) 일정시간마다 함수 실행 >> 10초 설정 >> setInterval은 JS 내장 함수
  // setIndex : 이전 값에 +1을 하도록 하고 length와 같아지면 초기화 되는
  // return : 컴포넌트가 화면에서 사라지면 cleanUp 해주는 것
  // [] : 컴포넌트 시작할 때 한번만 >> [index] : 버튼 누르면 초기화되도록

  //----- 검색창 광고 다음 수동 클릭
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % searchAdText.length); 
  };
  //----- 검색창 광고 이전 수동 클릭
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + searchAdText.length) % searchAdText.length); 
  };

  // 외부 클릭시 open(false)
  useEffect(() => {
    const clickOutside = (e) => {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    }
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);
  // clickOutside : 클릭 이벤트시 실행되는 함수 >> e : 이벤트 객체
  // wrapperRef.current : 내가 지정한 wrapper의 영역
  // wrapperRef.current.contains(e.target) : 내가 클릭한 곳이 영역에 포함되었는가
  // document :  웹 페이지 전체 >> addEventListener : 이벤트 등록 함수
  // mousedown : 이벤트 종류 (마우스 누르는 순간) >> mouseup(마우스 뗄 때), click(눌렀다 뗀 후)
  // return : 컴포넌트가 화면에서 사라지면 cleanUp 해주는 것


  return (
    <section id='headerLogoSearch'>
      <div className="headerLogoSearch__inner">
        <div className='headerLogoSearch__logo'>
          <img src={logo} alt='아로마포미 로고'/>
        </div>
        <div className='headerLogoSearch__search'>
          <div className="searchBar" onClick={() => setOpen(true)} ref={wrapperRef}>           {/*  wrapper 지정 */}
            <input placeholder='따뜻한 봄날의 혜택이 궁금하다면?'></input>
            <span>▼</span>
            <img src={ search } alt='돋보기 아이콘'/>
            {open && (
            <div className="searchDrop">
              <div className="recent">
                <h3 className='recentTitle'>
                  최근 검색어 <em>전체삭제</em>
                </h3>
                <ul className='recentList'>
                  {searchText.map((search, key) => (
                    <li key={key}>
                      <span>{key + 1}.</span>
                      <span>{search.name}</span>
                      <span>{search.date}</span>
                      <span>X</span>
                    </li>
                  ))}
                </ul>
                <div className="footer">
                  <span>자동저장 끄기</span>
                </div>
              </div>
              <div className='ad'>
                <h2 className='adTitle'>주간 특가 상품</h2>
                <div className="adShow">
                  <img className="arrow" src={searchAdLeftArrow} alt='광고 왼쪽 화살표' onClick={prevSlide}/>
                  <div className="show">
                  <div className="track" style={{ transform: `translateX(-${index * (100 / searchAdText.length)}%)` }}>
                  {/*  translateX() : index에 따라 일정 비율씩 이동시키는 코드 >> 슬라이드 개수랑 관련 있음 */}
                    {searchAdText.map((ad, key) => (
                      <div className="slideItem" key={key}>
                        <div className='adImg'>
                          <img key={key} src={ad.img} alt='광고 이미지1'/>
                        </div>
                        <div className='adInfo'>
                          <h3 className='name'>{ad.name}</h3>
                          <h2 className='price'>{ad.price}</h2>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                  <img className="arrow"  src={searchAdRightArrow} alt='광고 오른쪽 화살표' onClick={nextSlide}/>
                </div>
                <div className="page">
                  <span className={index === 0 ? "active" : ""} onClick={() => setIndex(0)}></span>
                  <span className={index === 1 ? "active" : ""} onClick={() => setIndex(searchAdText.length - 1)}></span>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderLogoSearch