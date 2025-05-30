import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'

const AppRoutes = () => {

  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/perfil' element = {<Perfil/>}/>
    </Routes>
  )
  
}

export default AppRoutes