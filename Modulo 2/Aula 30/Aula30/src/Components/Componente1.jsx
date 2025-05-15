import React from 'react'
import style from './Componente1.module.css'

const Componente1 = () => {

let estilo1 = {
    backgroundColor:'green',
    color: 'white',
    padding:'15px',
    border: 'solid black 2px',
    textAlign: 'center'
}

  return (
    <div>

      <h1 className={style.paragrafo}>Esse é o titulo 2!</h1>

      <p style={{backgroundColor:'orange', border:'solid black 2px', color:'black', textAlign:'center'}}>
        Esse é o CSS do Componente
      </p>

      <h2 style={estilo1}>CSS apenas desse componente</h2>

      <h1 className={style.titulo}>Novo Titulo</h1>

    </div>
  )
}

export default Componente1