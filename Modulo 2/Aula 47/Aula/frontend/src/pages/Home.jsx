import React, { useState } from 'react'

const Home = () => {
  let [email,setEmail] = useState()
  let [senha,setSenha] = useState()

  const fazerLogin = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch('http://localhost:3000/verificarLogin',{method:'post', headers:{"Content-Type":"application/json"}, body:JSON.stringify({email:email,senha:senha}) })

      const dados = await resposta.json()
      console.log(dados)
    } catch (error) {
      
    }
  }

  return (
    <>
    <div className='container-fluid vh-100 d-flex justify-content-center align-items-center'>
      <div className='card p-4' style={{width:'400px'}}>
        <h2 className='mb-4 text-center'>Login</h2>
        <form onSubmit={fazerLogin}>
          <div className='mb-3'>
            <label className='form-label' htmlFor="email">E-mail:</label>
            <input onChange={(e)=>setEmail(e.target.value)} className='form-control' type="email" id='username' name='email'/>
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor="senha">Senha:</label>
            <input onChange={(e)=>setSenha(e.target.value)} className='form-control' type="password" id='senha' name='senha'/>
          </div>

          <button className='btn btn-secondary w-100' type='submit'>Entrar</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Home