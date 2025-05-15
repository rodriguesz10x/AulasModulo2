import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './Components/Componente1'
import Formularios from './Components/Formularios'

function App() {
  

  return (
    <>

    {/* CSS GLOBAL - index.css */}

    <h1>Titulo 1</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum asperiores provident eveniet perferendis tenetur, vitae accusamus nostrum excepturi. Porro optio voluptates eligendi tempora. Quos excepturi quibusdam voluptatum magnam aut!
    </p>

    <p className='paragrafo2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dicta quas consectetur quibusdam perferendis fuga reiciendis nobis inventore. Omnis sunt ipsum earum labore quia officia tenetur inventore, maiores doloribus assumenda.
    </p>

    {/* CSS de componente */}

    <Componente1/>
    <Formularios></Formularios>
    
    </>
  )
}

export default App
