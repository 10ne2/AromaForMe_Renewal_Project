import React, { useState } from 'react'

import MainProductItem from "../components/common/MainProductItem"
import heart from "../assets/img/heart.png"
import pay from "../assets/img/pay.png"

import { listPro } from "../constants/listIndex"

const ListProduct = () => {

  const [page, setPage] = useState(1);
  const pageSize = 16;

  const currentData = listPro.slice(
    (page - 1) * pageSize,
    page * pageSize
  )

  return (
    <div id='listProduct'>
      <div className="listProduct__inner">
        <div className='listProduct__info'>
          <span>닥터타피 카테고리에 </span>
          <span className='count'>51 개</span>
          <span>의 상품이 등록되어 있습니다.</span>
        </div>
        <div className="listProduct__product" >
          <div className="category">
            <ul>
              <li>추천수</li>
              <li>판매량순</li>
              <li>신제품수</li>
              <li>낮은가격순</li>
              <li>높은가격순</li>
              <li>리뷰수</li>
            </ul>
          </div>
          <div className="view">
            <div className="track">
              <div className="itemList">
                {currentData.map((pro, key) => (
                  <div className="item">
                    <div className="hover">
                      <div>
                        <img className="heart" src={heart} alt='찜' />
                      </div>
                      <div>
                        <img className="pay" src={pay} alt='결제하기' />
                      </div>
                    </div>
                    <MainProductItem
                      key={key}
                      img={pro.img}
                      title={pro.title}
                      prePrice={pro.prePrice}
                      price={pro.price} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="page">
            <a className='last'
              onClick={() => setPage(1)}
              href="#listProduct">◀◀</a>
            <a onClick={() => setPage((prev => Math.max(prev - 1, 1)))}
              href="#listProduct">◀</a>
            {/* Math.max(a, b) : a와 b 비교해서 큰 값으로 반환 */}
            <div className="pageCircle">
              <a className={`circle ${page === 1 ? "active" : ""}`}
                onClick={() => setPage(1)}
                href="#listProduct">
              </a>
              <a className={`circle ${page === 2 ? "active" : ""}`}
                onClick={() => setPage(2)}
                href="#listProduct">
              </a>
              <a className={`circle ${page === 3 ? "active" : ""}`}
                onClick={() => setPage(3)}
                href="#listProduct">
              </a>
            </div>
            <a onClick={() => setPage((prev => Math.min(prev + 1, 3)))}
              href="#listProduct">▶</a>
            {/* Math.min(a, b) : a와 b 비교해서 작은 값으로 반환 */}
            <a className='last'
              onClick={() => setPage(3)}
              href="#listProduct">▶▶</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListProduct