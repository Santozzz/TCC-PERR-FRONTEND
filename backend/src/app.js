import express from 'express';
import conexao from '../infra/conexao.js'
const app = express();

// Para ler body com JSON   
app.use(express.json())

// Busca o usuario pelo ID
function buscarUsuarioPorID(id){
    return usuarios.filter(usuario => usuario.id == id)
}

// Pegar a posição do elemento do array pelo ID
function buscarIdUsuario(id){
    return usuarios.findIndex( usuario => usuario.id == id)
}

// ROTAS
app.get('/usuarios', (req, res) => {
    const  sql = 'SELECT * FROM usuarios'
    conexao.query(sql, (err, result) => {
        if(err){    
            res.status(404).json(err)
        } else{
            res.status(200).json(result)
        }
    })
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const  sql = 'SELECT * FROM usuarios WHERE id=?'
    conexao.query(sql, id, (err, result) => {
        const linha = result[0]
        if(err){    
            res.status(404).json(err)
        } else{
            res.status(200).json(linha)
        }
    })
})

app.post('/usuarios', (req, res) => {
    const id = req.body
    const  sql = 'INSERT INTO usuarios SET ?'
    conexao.query(sql, usuario, (err, result) => {
        if(err){    
            res.status(400).json(err)
        } else{
            res.status(201).json(result)
        }
    })
})

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const  sql = 'DELETE FROM usuarios WHERE id=?'
    conexao.query(sql, id, (err, result) => {
        if(err){    
            res.status(404).json(err)
        } else{
            res.status(200).json(result)
        }
    })
})

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const usuario = req.body
    const  sql = 'UPDATE usuarios SET ? WHERE id=?'
    conexao.query(sql, [usuario, id], (err, result) => {
        if(err){    
            res.status(400).json(err)
        } else{
            res.status(200).json(result)
        }
    })
})

export default app;