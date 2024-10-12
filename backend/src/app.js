import express from 'express';
import routes from './routes.js';
const app = express();

// Para ler body como JSON   
app.use(express.json())

// Usar o router
app.use(routes) 


export default app;
