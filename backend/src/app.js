import express from 'express';
const app = express();

// Para ler body com JSON   
app.use(express.json())

// MOCK
const usuarios = [
    {id: 1, nome: 'David1', sala: '11'},
    {id: 2, nome: 'David2', sala: '10'},
    {id: 3, nome: 'David3', sala: '11'},
    {id: 4, nome: 'David4', sala: '31'},
]

// Busca o usuario pelo ID
function buscarUsuarioPorID(id){
    return usuarios.filter(usuario => usuario.id == id)
}

// Pegar a posição do elemento do array pelo ID
function buscarIdUsuario(id){
    return usuarios.findIndex( usuario => usuario.id == id)
}

// Rota padrão ou raiz  
app.get('/', (req, res) => {
    res.send('Olá mundo!')
});

app.get('/usuarios', (req, res) => {
    res.status(200).send(usuarios)
})

app.get('/usuarios/:id', (req, res) => {
    res.status(200).json(buscarUsuarioPorID(req.params.id))
})

app.post('/usuarios', (req, res) => {
    usuarios.push(req.body)
    res.status(201).send('Usuario cadastrado com sucesso!')
})

app.delete('/usuarios/:id', (req, res) => {
    let index = buscarIdUsuario(req.params.id)
    usuarios.splice(index, 1)
    res.send(`Usuario com o id: ${req.params.id} excluido com sucesso!`)
})

app.put('/usuarios/:id', (req, res) => {
    let index = buscarIdUsuario(req.params.id)
    usuarios[index].nome = req.body.nome
    usuarios[index].sala = req.body.sala
    res.json(usuarios)
})

export default app;