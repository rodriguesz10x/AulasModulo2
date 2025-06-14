import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app = express()
app.use(cors())
app.use(express.json())

const porta = 3000

// Conexão com o MySql
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'sistema_gestao_escolar'
})

// Rotas com banco de dados
conexao.connect((erro) => {

})

app.get('/',(req,res) => {
    res.send('Servidor rodando')
})

app.post('/verificarLogin', (req,res) => {
    let usuario = req.body
    console.log(usuario)
    let sql = `select * from usuarios where email = '${usuario.email}' and senha = '${usuario.senha}'`
    conexao.query(sql,(erro, resultado) => {
        if(erro){
            console.log(erro)
            return res.status(500).json({erro:"Erro no Servidor"})
        }
        if(resultado.length > 0){
            resultado = resultado[0]
            console.log(resultado)
        }else{
            return res.status(401)
        }
    })

    res.send('')
})


app.listen(porta, ()=>{
    console.log(`O servidor está rodando na porta ${porta}`)
})