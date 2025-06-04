import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
const porta = 3000

let users = [

    {id:1,nome:'Maria',email:'Maria@gmail.com'},
    {id:2,nome:'Pedro',email:'Pedro@gmail.com'},
    {id:3,nome:'Ronaldo',email:'Ronaldo@gmail.com'}

]

app.get('/usuarios',(req,res)=>{
    return res.json(users)
})

app.listen(porta,()=>{
    console.log(`O servidor está rodando na porta ${porta}`)
})