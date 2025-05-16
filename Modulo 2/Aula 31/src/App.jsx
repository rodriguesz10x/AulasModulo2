import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [usuario,setUsuario] = useState('')
  let [senha,setSenha] = useState('')

  let usuarios = [
    {user:'maria', senha:'123'},
    {user:'João', senha:'456'},
    {user:'pedro', senha:'789'},
    {user:'tiago', senha:'987'},
  ]

  function click(e){
    e.preventDefault()
    console.log(usuario)
    console.log(senha)
  }

  return (
    <>
    <h1>Login</h1>

    <form>

      <div>
        <label htmlFor="">Usuário: </label>
        <input onChange={(e) => setUsuario(e.target.value)} type="text" name='usuario' id='usuario'/>
      </div>
<br />      
      <div>
        <label htmlFor="">Senha: </label>
        <input onChange={(e) => setSenha(e.target.value)} type="password" name='senha' id='senha'/> 
      </div>
<br />
      <h2>Usuário: {usuario}</h2><br />
      <h2>Senha: {senha}</h2>
      <button onClick={(e) => click(e)} type='submit'>Logar</button>

    </form>
    
    </>
  )
}

export default App