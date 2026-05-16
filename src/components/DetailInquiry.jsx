import React from 'react'
import CheckBox from './common/CheckBox'

import { inquiry } from "../constants/detailIndex"

const DetailInquiry = () => {
  return (
    <div id='detailInquiry'>
      <div className="detailInquiry__inner">
        <div className="detailInquiry__top">
          <h2>배송, 주문(취소/교환/환불)관련 문의는 고객센터 <em>1:1 고객상담</em>에 남겨주세요.</h2>
          <button>문의하기</button>
        </div>
        <div className="detailInquiry__list">
          <div className="check">
            <CheckBox name="inquiry" title="비밀글 제외" />
          </div>
          <div className="list">
            {inquiry.map((inquiry, key) => (
              <div className="item">
                <div className="top">
                  <span className="state">{inquiry.state}</span>
                  <span className="writeId">{inquiry.writeId}</span>
                  <span className="writeDate">{inquiry.writeDate}</span>
                </div>
                <div className="body">
                  <h3 className="title">{inquiry.title}</h3>
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

export default DetailInquiry