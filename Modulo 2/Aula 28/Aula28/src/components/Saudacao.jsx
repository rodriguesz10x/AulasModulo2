import React from 'react'

const Saudacao = (props) => {
  return (
    <>
      {props.pessoas.map((pessoa,index) => (
        <p key={index}>Olá {pessoa.nome} sua idade é {pessoa.idade}</p>
      ))}
    </> 
  )
}

export default Saudacao
