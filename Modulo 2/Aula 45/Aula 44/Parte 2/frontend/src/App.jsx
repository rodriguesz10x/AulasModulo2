import { useEffect,useState } from 'react'
import './App.css'
import TodosUser from './components/TodosUser'

function App() {

  let [mostrar,setMostrar] = useState(false)
  let [id,setId] = useState('')
  let [dadosUser,setDadosUser] = useState()

  function mostrarUsuarios(){
    if(mostrar){
      setMostrar(false)
    }else{
    setMostrar(true)
    }
  }  

  async function buscarUsuario(){
    const resposta = await fetch(`http://localhost:3000/usuarios ${id}`)
    const dados = await resposta.json()
    setDadosUser(dados)
  }
  
  return (
    <>
      <h1>Selecione uma opção</h1>
      <button onClick={mostrarUsuarios}>Todos os usuários</button>
      <h2>Digite o id do usuario</h2>

      <input onChange={e => setId(e.target.value)} type="text" />

      <button onClick={buscarUsuario}>Buscar Usuario</button>

      {mostrar ? <TodosUser/>:''}
      {dados ? dados.nome:''}
    </>
  )
 }

export default App