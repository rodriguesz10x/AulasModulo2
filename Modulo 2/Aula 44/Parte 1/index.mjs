import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { Sequelize,DataTypes } from 'sequelize'

dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host:process.env.DB_HOST,
        dialect:'mysql'
    }
)

try{
    await sequelize.authenticate()
    console.log('Banco conectado com sucesso!')  
}catch(e){
    console.log(e)
}

const Usuarios = sequelize.define('Usuarios',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type:DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    nome:{
        type:DataTypes.STRING,
        allowNull: false
    },
    ativo:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    },
    tipo:{
        type:DataTypes.ENUM('admin','aluno','professor')
    }
},{
    timestamps: false
})

const Alunos = sequelize.define('Alunos',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id:{
        type:DataTypes.INTEGER,
        unique: true,
        references: {model:'Usuarios',key:'id'}
    },
    matricula:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    data_nascimento:{
        type:DataTypes.DATEONLY
    },
    turma_id:{
        type:DataTypes.INTEGER,
        references: {model:'Turmas',key:'id'},
        onDelete: 'CASCADE' // ou SET NULL
    }
},{
    timestamps: false
})

const Turmas = sequelize.define('Turmas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type:DataTypes.STRING
    },
    ano:{
        type:DataTypes.INTEGER
    }
},{
    timestamps: false
})

const Professores = sequelize.define('Professores',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    especialidade:{
        type:DataTypes.STRING
    },
    usuario_id:{
        type:DataTypes.INTEGER,
        references: {model:'Usuarios', key:'id'},
    }
},{
    timestamps: false
})

const Disciplinas = sequelize.define('Disciplinas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type:DataTypes.STRING
    },
    professor_id:{
        type:DataTypes.INTEGER,
        references: {model:'Professores', key:'id'}
    }
},{
    timestamps: false
})

const Matriculas_Disciplinas = sequelize.define('Matriculas_Disciplinas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    aluno_id:{
        type:DataTypes.INTEGER,
        references:{model:'Alunos', key:'id'}
    },
    disciplina_id:{
        type:DataTypes.INTEGER,
        references:{model:'Disciplinas', key:'id'}
    },
    data_matricula:{
        type:DataTypes.DATE
    }
},{
    timestamps: false
})


const app = express()
const porta = process.env.NODE_PORTA

app.use(express.json())

app.get('/', async (req,res)=>{
    console.log(alunos)
    let alunos = await Alunos.findAll()
    return res.send(alunos)
})

app.get('/turmas', async (req,res)=>{
    console.log(turmas)
    let turmas = await Turmas.findAll()
    return res.send(turmas)
})


app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})