import React from 'react'
import { Home } from '../components/Home/Home'
import { Details } from '../components/Details/Details'
import { Media } from '../components/Media/Media'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { SearchResult } from '../components/SearchResult/SearchResult'

export const PrincipalRouter = () => {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Navigate to={"/home"}/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/search-result/:id' element={<SearchResult />} />
        <Route path='/media/:id/:season/:episode' element={<Media/>} />
        </Routes>
    </BrowserRouter>
  )
}
