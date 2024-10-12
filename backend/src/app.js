import express from 'express';
import UsuarioController from './app/controllers/UsuarioController.js';
const app = express();

// Para ler body com JSON   
app.use(express.json())

// ROTAS
app.get('/usuarios', UsuarioController.index)
app.get('/usuarios/:id', UsuarioController.show)
app.post('/usuarios', UsuarioController.store)
app.put('/usuarios/:id', UsuarioController.update)
app.delete('/usuarios/:id', UsuarioController.delete)

export default app;
