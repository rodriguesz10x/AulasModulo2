import { useEffect,useState } from 'react'
import './App.css'

function App() {

  let [usuarios,setUsuarios] = useState([])

  useEffect(()=>{
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch('http://localhost:3000/usuarios')
        const dados = await resposta.json()
        setUsuarios(dados)
      } catch (error) {
        console.log(error)
      }
    }
    buscarUsuario()
  },[])

  console.log(usuarios)
  
  return (
    <>
  <h1>Aqui está a lista de usuarios</h1>
  <ul>
    {usuarios.map((usuario) => (
      <li key={usuario.id}>Nome: {usuario.nome}, Email: {usuario.email}</li>
    ))}
  </ul>
    </>
  )
}

export default App
