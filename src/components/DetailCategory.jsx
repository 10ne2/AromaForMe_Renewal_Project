import React, { useState } from 'react' 

import DetailProExplain from "../components/DetailProExplain"
import DetailReview from "../components/DetailReview"
import DetailInquiry from "../components/DetailInquiry"
import DetailNote from "../components/DetailNote"

import { detailCategory } from "../constants/detailIndex"

const DetailCategory = () => {

  const [tab, setTab] = useState(0);

  return (
    <div id='detailCategory'>
      <div className="detailCategory__inner">
        <ul>
          <li 
            onClick={() => setTab(0)}
            className={tab === 0 ? "active" : ""}
          >
            {detailCategory[0]}
          </li>
          <li 
            onClick={() => setTab(1)}
            className={tab === 1 ? "active" : ""}
          >
            {detailCategory[1]}
          </li>
          <li 
            onClick={() => setTab(2)}
            className={tab === 2 ? "active" : ""}
          >
            {detailCategory[2]}
          </li>
          <li 
            onClick={() => setTab(3)}
            className={tab === 3 ? "active" : ""}
          >
            {detailCategory[3]}
          </li>
        </ul>
      </div>
      { tab === 0 && <DetailProExplain /> }
      { tab === 1 && <DetailReview /> }
      { tab === 2 && <DetailInquiry /> }
      { tab === 3 && <DetailNote /> }
    </div>
  )
}

export default DetailCategory