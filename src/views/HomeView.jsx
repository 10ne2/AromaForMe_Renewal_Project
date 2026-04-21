import React from 'react'

import Header from "../components/Header"
import HeaderLoginNav from "../components/HeaderLoginNav"
import HeaderLogoSearch from "../components/HeaderLogoSearch"
import HeaderMainNav from "../components/HeaderMainNav"

// import Main from "../components/Main"
// import MainAd from "../components/MainAd"
// import MainPopuTopTen from "../components/MainPopuTopTen"
// import MainNewRecom from "../components/MainNewRecom"
// import MainSubAd1 from "../components/MainSubAd1"
// import MainTypeRecom from "../components/MainTypeRecom"
// import MainSubAd2 from "../components/MainSubAd2"
// import MainBestRecom from "../components/MainBestRecom"
// import MainSubAd3 from "../components/MainSubAd3"
// import MainPopuTag from "../components/MainPopuTag"

// import Footer from "../components/Footer"
// import FooterNav from "../components/FooterNav"
// import FooterInfo from "../components/FooterInfo"

const HomeView = () => {
  return (
    <div>
      <Header>
        <HeaderLoginNav />
        <HeaderLogoSearch />
        <HeaderMainNav />
      </Header>
      {/* <Main>
         <MainAd />
         <MainPopuTopTen />
         <MainNewRecom />
         <MainSubAd1 />
         <MainTypeRecom />
         <MainSubAd2 />
         <MainBestRecom />
         <MainSubAd3 />
         <MainPopuTag />
      </Main>
      <Footer>
        <FooterNav />
        <FooterInfo />
      </Footer> */}
    </div>
  )
}

export default HomeView