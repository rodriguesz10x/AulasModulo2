import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Footer from './components/Footer'
import Saudacao from './components/Saudacao'

function App() {

  let pessoas = [

    {nome:'Rebeca', idade:18},
    {nome:'Paulo', idade:19},
    {nome:'Saulo', idade:21}
    
  ]

  return (
    <>
      <Cabecalho/>

      <h1>Olá React!</h1>

      <Saudacao pessoas = {pessoas}/>

      <Footer/>
    </>
  )
}

export default App