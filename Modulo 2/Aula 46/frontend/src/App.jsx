import { useEffect, useState } from 'react'
import './App.css'
import TodosUser from './components/TodosUser'
import UsuarioEspecifico from './components/UsuarioEspecifico'
import Cadastro from './components/Cadastro'

function App() {
  let [mostrar,setMostrar] = useState(false)
  let [id,setId] = useState('')
  let [dadosUser, setDadosUser] = useState({nome:""})

  let [componente,setComponente] = useState(false)

  return (
    <>
      <h1>Selecione uma opção</h1>
      <button onClick={()=>{setComponente('todos')}}>Todos os Usuarios</button><br /><br />

      <button onClick={()=>{setComponente('um')}}>Exibir Usuario</button><br /><br />

      <button onClick={()=>{setComponente('cadastrar')}}>Cadastrar Usuario</button><br /><br />

      <button onClick={()=>{setComponente('atualizar')}}>Atualizar Dados</button><br /><br />

      <button onClick={()=>{setComponente('deletar')}}>Deletar Usuario</button><br /><br />

      <button onClick={()=>{setComponente('')}}>Limpar Tela</button><br /><br />

    <div>
      {componente == 'todos' && <TodosUser/>}
      {componente == 'um' && <UsuarioEspecifico/>}
      {componente == 'cadastrar' && <Cadastro/>}
    </div>
      
    </>
  )
}

export default App