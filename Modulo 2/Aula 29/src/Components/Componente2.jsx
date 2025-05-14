import React from 'react'

const Componente2 = (props) => {

  return (

    <>
        <div className='container'>
            <div style={{width:'250px', border:'solid 1px red'}}>
                <img src={props.produto.image} width="200px"  alt="" />
                <h3>Titulo: {props.produto.title}</h3>
                <h3>Preço: {props.produto.price}</h3>
            </div>
        </div>
    </>
  )

}

export default Componente2