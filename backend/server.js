import app from './src/app.js'

const PORT = 3000

// Escutar a porta
app.listen(PORT, () => {
    console.log(`O servidor esta rodando no endereço: http://localhost:${PORT}`);
})      