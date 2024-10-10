import express from 'express';

const app = express();

// MOCK
const usuarios = [
    {id: 1, nome: 'David1', sala: '11'},
    {id: 2, nome: 'David2', sala: '10'},
    {id: 3, nome: 'David3', sala: '11'},
    {id: 4, nome: 'David4', sala: '31'},
]

// Rota padrão ou raiz  
app.get('/', (req, res) => {
    res.send('Olá mundo!')
});

app.get('/usuarios', (req, res) => {
    res.status(200).send(usuarios)
})

export default app;