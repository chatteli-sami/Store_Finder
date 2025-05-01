import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import OneStore from './views/OneStore'
import CreateStore from './views/CreateStore'
import UpdateStore from './views/UpdateStore'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='/stores/add' element={<CreateStore/>}/>
        <Route path='/stores/edit/:id' element={<UpdateStore/>}/>
        <Route path='/stores/oneStore/:id' element={<OneStore/>}/>
      </Routes>
    </div>
  )
}

export default App