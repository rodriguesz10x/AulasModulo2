import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    senha:'1234',
    database:'escola1'
})

conexao.connect((erro)=>{
    if(erro){
        console.log(`Erro ao se conectar com o  banco: ${erro}`)
    }else{
        console.log('banco conectado com sucesso!')
    }
})

const app = express()
app.use(cors())
app.use(express.json())
const porta = 3000

app.get('/usuarios',(req,res)=>{
    let sql = 'select * from usuarios'
    conexao.query(sql,(erro,result)=>{
        try {
            return res.json(result)
        } catch (error) {
            console.log(error,erro)
        }
    })
})

app.listen(porta,()=>{
    console.log(`O servidor está rodando na porta ${porta}`)
})