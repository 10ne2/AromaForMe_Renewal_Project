import React from 'react'

import Header from "../components/Header"
import HeaderLoginNav from "../components/HeaderLoginNav"
import HeaderLogoSearch from "../components/HeaderLogoSearch"
import HeaderMainNav from "../components/HeaderMainNav"

import List from '../components/List'
import ListCategory from "../components/ListCategory"
import ListPopu from "../components/ListPopu"
import ListProduct from '../components/ListProduct'

import Footer from "../components/Footer"
import FooterNav from "../components/FooterNav"
import FooterInfo from "../components/FooterInfo"

const ListView = () => {
  return (
    <div>
      <Header>
        <HeaderLoginNav />
        <HeaderLogoSearch />
        <HeaderMainNav />
      </Header>
      <List>
        <ListCategory />
        <ListPopu />
        <ListProduct />
      </List>
      <Footer>
        <FooterNav />
        <FooterInfo />
      </Footer>
    </div>
  )
}

export default ListView