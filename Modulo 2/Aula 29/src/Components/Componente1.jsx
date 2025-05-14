import React from 'react'

const Componente1 = (props) => {

  return (

    <>
    <h1>Lista de clientes cadastrados:</h1>
      {props.people.map((pessoa) => (
        <h3 key={pessoa.id}>
        Nome: {pessoa.nome} <br />
        Numero: {pessoa.numero} <br />
        cpf: {pessoa.cpf}
        </h3>
      ))}
    </>
    
  )

}

export default Componente1