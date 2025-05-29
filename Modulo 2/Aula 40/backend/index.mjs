import express from 'express'

const app = express()
const porta = 3000

let usuarios = [
    {id:'1',nome:'Maria',ativo:true},
    {id:'2',nome:'João',ativo:true},
    {id:'3',nome:'Pedro',ativo:true}
]

app.get('/',(req,res) => {
    res.send('Olá mundo!!')
})

app.get('/usuarios',(req,res)=>{
    res.json(usuarios)
})

app.get('/usuarios/:id',(req,res)=>{
    let id = req.params.id
})

app.listen(porta,()=>{
    console.log(`servidor rodando na porta ${porta}`)
})