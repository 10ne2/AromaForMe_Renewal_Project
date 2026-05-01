import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import DetailView from './DetailView'
import ListView from './ListView'
import ScrollToTop from '../components/common/ScrollToTop'

const AromaMain = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/detail' element={<DetailView />} />
        <Route path='/list' element={<ListView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AromaMain