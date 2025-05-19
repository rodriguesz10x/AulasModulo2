import React from 'react'
import { useEffect,useState } from 'react'

const Perfil = () => {

let [dados,setDados] = useState('')
let [carregando, setCarregando] = useState('')

    useEffect(() => {
        setCarregando(true)
        fetch('https://randomuser.me/api/')
        .then(resp => resp.json())
        .then((resp) => {
            setDados(resp)
            console.log(resp);
            console.log(resp.results[0].picture.thumbnail);
            
        })
        .then(() => {
            setCarregando(false)
        })
        
    },[])
  return (
    <div>
      {dados && (
        <img src={dados.results[0].picture.medium} alt="" />
      )}
    </div>
  )
}

export default Perfil