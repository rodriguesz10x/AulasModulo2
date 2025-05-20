import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/Perfil'
import Projetos from './components/Projetos'

function App() {

  return (
    <>

    <h1>Perfil do Freelancer</h1>
    <Perfil></Perfil>

    <h1>Projetos Recentes</h1>
    <Projetos></Projetos>

    </>
  )
}

export default App
