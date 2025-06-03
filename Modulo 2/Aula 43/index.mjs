import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config()

const app = express()
const porta = process.env.NODE_PORTA

app.use(express.json())

function conectarBanco(){
    const conexao = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })
    console.log('banco conectado com sucesso!')
    
    return conexao
}

conectarBanco()

app.get('/',(req,res)=>{
    return res.send('API inicial')
})

app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})