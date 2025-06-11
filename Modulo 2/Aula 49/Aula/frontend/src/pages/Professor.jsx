import React from 'react'

const Professor = () => {

  const professor = JSON.parse(localStorage.getItem('usuario'))
  console.log(professor)
  
  return (
    <>
    <div style={{textAlign:'center'}}>
      <h2 style={{padding:'8px'}}>Painel do Professor</h2>

      <button className='btn btn-primary' style={{padding:'8px',margin:'10px'}}>Lançar Notas</button>
      <button className='btn btn-success' style={{padding:'8px',margin:'10px'}}>Lançar Frequência</button>
<br />
      <p>Selecione uma opção acima</p>
    </div>

    <div>
      <h2>Lançamento de Frequência</h2><br />
      <label htmlFor="">João silva</label>
      <select name="" id="">
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>

<br />

      <label htmlFor="">Maria Oliveira</label>
      <select name="" id="">
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>

<br />

      <label htmlFor="text">Carlos Souza</label>  
      <select name="" id="">
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>

<br />

<br />

      <button>Salvar Frequência</button>

    </div>
<br />
    <div>
      <h2>Lançamento de Notas</h2><br />
      <label htmlFor="text">João silva</label>
      <input type="select" placeholder='Nota' id='text' name='text'/><br />

      <label htmlFor="text">Maria Oliveira</label>
      <input type="select" placeholder='Nota' id='text' name='text'/><br />

      <label htmlFor="text">Carlos Souza</label>
      <input type="select" placeholder='Nota' id='text' name='text'/><br />
<br />
      <button>Salvar Todas as Notas</button>
    </div>
    </>
  )
}

export default Professor
