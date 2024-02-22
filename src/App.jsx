import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
  return (
    <>
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
    </>
    
  )
}

export default App
