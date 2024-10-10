import app from './src/app.js'
import conexao from './infra/conexao.js'

const PORT = 3000

// Fazer a conexao
conexao.connect((err) => {
    if(err){
        console.log(err);
    } else{
        console.log('Conexão realizada com sucesso');
        app.listen(PORT, () => {
            console.log(`O servidor esta rodando no endereço: http://localhost:${PORT}`);
        })        
    }
})
