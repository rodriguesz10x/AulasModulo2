import React, { useState } from 'react'

const Formularios = () => {

let [nome, setNome] = useState('')
let [email, setEmail] = useState('')

  return (
    <div>

    <form>
    <label htmlFor="">Nome: </label>
    <input onChange={(evento) => setNome(evento.target.value)} type="text" name='nome' id='nome' /><br />

    <br />

    <label htmlFor="">Email: </label>
    <input onChange={(e)=>setEmail(evento.target.value)} type="email" name='email' id='email' />
    </form>

    </div>
  )
}

export default Formularios
