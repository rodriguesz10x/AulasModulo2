import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { Sequelize,DataTypes } from 'sequelize'

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT
    }
)

try{
    await sequelize.authenticate()
    console.log('Banco conectado com sucesso!')  
}catch(e){
    console.log(e)
}

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

app.get('/todosUsuarios',(req,res)=>{
    const conexao = conectarBanco()
    let sql = 'select nome,tipo from usuarios'
    conexao.query(sql,(e,result)=>{
        if(e){
            console.log(`deu erro: ${e}`)
        }else{
            return res.json(result)
        }
        conexao.end()
    })
    conexao.end()
})

app.get('/todosAlunos/:id',(req,res)=>{
    const conexao = conectarBanco()
    let id = req.params.id
    let sql = `select * from usuarios where tipo = 'aluno' and id ${id}`
    conexao.query(sql,(e,result)=>{
        if(e){
            console.log(`deu erro: ${e}`)
        }else{
            return res.json(result)
        }
        conexao.end()
    })
    conexao.end()
})

app.post('/cadastrarUsuario',(req,res)=>{
    const conexao = conectarBanco()
    let novoUsuario = req.body
    let sql = `insert into usuarios (username, senha, nome, ativo, tipo) values ('${novoUsuario.username}','${novoUsuario.senha}','${novoUsuario.nome}','${novoUsuario.ativo}','${novoUsuario.tipo}')`

    conexao.query(sql,(e,result)=>{
        if(e){
            console.log(e)            
        }else{
            res.status(200)
            return res.send('Usuário Cadastrado!!')
        }
    })
})

app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})