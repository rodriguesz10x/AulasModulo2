import { useState } from "react"

const BuscaCEP = () => {
    let [cep,setCep] = useState('')
  return (
    <div>
      <label htmlFor="cep">Digite seu CEP: </label>
      <input onChange={(e) => setCep(e.target.value)} type="text" name="cep" id="cep" maxLength={8}/>
      <h1>CEP digitado: {cep}</h1>
      <button >Enviar</button>
    </div>
  )
}

export default BuscaCEP