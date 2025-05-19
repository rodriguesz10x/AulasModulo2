import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/Perfil'

function App() {

  let usuarios =  [
  {user:'Pedro',senha:'1234'},
  {user:'Ana',senha:'5678'},
  {user:'Levi',senha:'9876'}
]

  let [user, setUser] = useState('')
  let [senha, setSenha] = useState('')
  let [logado, setLogado] = useState(false)

  function validarUsuario(){
    usuarios.forEach((usuario) => {
      if(usuario.user === user){
        if(usuario.senha === senha){
          setLogado(true)
          setUser('')
          setSenha('')
        }
      }
    })
  }

  return (
    <>

    <label htmlFor="user">Usuário: </label><br />
    <input value={user} onChange={(e) => setUser(e.target.value)} type="text" id='user' name='user' /><br />

    <label htmlFor="senha">Senha: </label><br />
    <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" id='senha' name='senha' /><br /><br />

    <button onClick={validarUsuario}>Logar</button>

    {logado && (<Perfil/>)}

    </>
  ) 
}

export default App
