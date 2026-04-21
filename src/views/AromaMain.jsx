import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './HomeView'
import DetailView from './DetailView'
import ListView from './ListView'

const AromaMain = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HomeView /> } />
            <Route path='/detail' element={ <DetailView /> } />
            <Route path='/list' element={ <ListView /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default AromaMain