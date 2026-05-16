import React from 'react'
import Header from '../components/Header'
import HeaderLoginNav from '../components/HeaderLoginNav'
import HeaderLogoSearch from '../components/HeaderLogoSearch'
import HeaderMainNav from '../components/HeaderMainNav'
import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav'
import FooterInfo from '../components/FooterInfo'
import Detail from '../components/Detail'
import DetailInfo from '../components/DetailInfo'
import DetailRecomPro from '../components/DetailRecomPro'
import DetailCategory from '../components/DetailCategory'

const DetailView = () => {
  return (
    <div>
      <Header>
        <HeaderLoginNav />
        <HeaderLogoSearch />
        <HeaderMainNav />
      </Header>
      <Detail>
        <DetailInfo />
        <DetailRecomPro />
        <DetailCategory />
      </Detail>
      <Footer>
        <FooterNav />
        <FooterInfo />
      </Footer>
    </div>
  )
}

export default DetailView