import app from './src/app.js'

const port = 3000


app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`O servidor esta rodando na porta: ${port}`);
})