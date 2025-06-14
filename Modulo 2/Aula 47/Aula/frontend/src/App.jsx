import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './contexts/UserContext'
//teste
function App() {

  let logado = false

  return (
    <>
    <UserProvider>

      <BrowserRouter>
        {logado && <Navbar/>}
        <AppRoutes/>
      </BrowserRouter>
      
    </UserProvider>
      
    </>
  )
}

export default App
