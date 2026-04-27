import React from 'react'

import logo from '../assets/img/footerLogo.png'

const companyInfo = [
  "회사명 : (주)유어바디 l 상표명 : 아로마포미 l 사업자등록번호 : 129-81-69667",
  "대표전화 : 1566-6399 l 팩스 : 043-872-9455",
  "주소 : 경기도 용인시 기흥군 금화로 3",
  "공장 주소 : 경기도 안산시 서운면 제3공단 1길 l 물류센터 : 충북 음성군 소이면 갑산로 107-47",
  "연구소 주소  : 경기도 평택시 포승읍 국가산업단지 1112",
  "통신판매업 신고 : 제 2015-용인기흥-0418호 l 개인정보관리 책임자 : 김정중 l 대표 : 김삼수",
  "Contact  : samsu9455@nate.com"
]

const customerInfo = [
  "고객센터",
  "080-630-1396",
  "(수신자 요금 부담)",
  "평일 운영시간 AM 10: 00 - PM 06:00",
  "주말 운영시간 AM 10:00 - PM 01:00",
  "(일요일 및 공휴일 휴무)"
]

const FooterInfo = () => {
  return (
    <div id='footerInfo'>
      <div className="footerInfo__inner">
        <div className="footerInfo__com">
          <div className="logo">
            <img src={logo} alt='로고' />
          </div>
          <div className="companyInfo">
            <span>{companyInfo[0]}</span>
            <span>{companyInfo[1]}</span>
            <span>{companyInfo[2]}</span>
            <span>{companyInfo[3]}</span>
            <span>{companyInfo[4]}</span>
            <span>{companyInfo[5]}</span>
            <span>{companyInfo[6]}</span>
          </div>
        </div>
        <div className="footerInfo__cus">
          <h3>{customerInfo[0]}</h3>
          <h1>{customerInfo[1]}</h1>
          <span>{customerInfo[2]}</span>
          <span>{customerInfo[3]}</span>
          <span>{customerInfo[4]}</span>
          <span>{customerInfo[5]}</span>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo