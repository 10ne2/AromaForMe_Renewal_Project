import React, { useEffect, useState } from 'react'

import MainPopuTopTenLeft from "../assets/img/mainPopuTopTenLeft.png"
import MainPopuTopTenRight from "../assets/img/mainPopuTopTenRight.png"

import { popuTopTen } from "../constants/mainIndex"

const MainPopuTopTen = () => {

  const loopData = [...popuTopTen, ...popuTopTen];                  // 데이터 루프처리
  const [page, setPage] = useState(0);                              // 현 페이지
  const pageSize = 5;                                               // 페이지에 보이는 item 수
  const maxPage = Math.ceil(popuTopTen.length / pageSize);          // 마지막 페이지 수 (itme 길이 / 보이는 item) + Math.ceil로 올림처리
  const [isTransition, setIsTransition] = useState(true);           // 애니메이션 활성화 스위치

  // 슬라이스 루프 이펙트
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);                                           // 빈 배열은 한 번만 실행

  // 마지막 페이지에서 첫 페이지로 이동
  useEffect(() => {
    if (page === maxPage) {                         // 현 페이지가 마지막 페이지일 경우 (transition이 끝난 후 실행)
      setTimeout(() => {                            // ✨setTimeout (실행함수, 시간) : 일정 시간 뒤에 코드를 실행
        setIsTransition(false);                     // 애니메이션 비활성화
        setPage(0);                                 // 0 페이지로 이동

        requestAnimationFrame(() => {               // ✨다음 화면이 그려질 때 실행
          setIsTransition(true);                    // 다시 애니메이션 활성화
        });
      }, 500);                                      // transition 시간과 맞추기
    }
  }, [page]);                                       // 실행 조건 : page => 페이지가 변경될 때 실행

  // 다음 버튼
  const nextSlice = () => {
    setPage((prev) => prev + 1);             // 현재 페이지에 +1을 해서 업데이트
  };

  // 이전 버튼
  const prevSlice = () => {
    setPage((prev) => prev - 1);             // 현재 페이지에 -1을 해서 업데이트
  };

  return (
    <div className='popuTopTen'>
      <div className="popuTopTen__inner">
        <div className="popuTopTen__title">
          <h2>인기 상품 Top 10</h2>
          <span className='line'></span>
        </div>

        <div className="popuTopTen__product">
          <img src={MainPopuTopTenLeft}
            alt='왼쪽 방향키'
            onClick={prevSlice}
          />
          <div className="view">
            <div className="track"
              style={{
                transform: `translateX(-${page * 100}%)`,                                 // 페이지 수만큼 화면 이동
                transition: isTransition ? "transform 0.5s ease" : "none"                 // 애니메이션 활성화 시 css 적용
              }}>
              {loopData.map((pop, key) => (
                <div className="slideItem" key={key}>
                  <div className="top">
                    <span>{pop.num}</span>
                  </div>
                  <div className="proImg">
                    <img src={pop.img} alt='상품이미지' />
                  </div>
                  <h3 className='name'>{pop.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <img src={MainPopuTopTenRight}
            alt='오른쪽 방향키'
            onClick={nextSlice}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPopuTopTen