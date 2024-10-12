import conexao from "../../../infra/conexao.js"

class UsuarioController {

    async index(req, res) {
        const  sql = 'SELECT * FROM usuarios'
        conexao.query(sql, (err, result) => {
            if(err){    
                res.status(404).json(err)
            } else{
                res.status(200).json(result)
            }
        })
    }
    show(req, res) {
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
    }
    store(req, res) {
        const usuario = req.body
        const  sql = 'INSERT INTO usuarios SET ?'
        conexao.query(sql, usuario, (err, result) => {
            if(err){    
                res.status(404).json(err)
            } else{
                res.status(201).json(result)
            }
        })
    }
    update(req, res) {
        const id = req.params.id
        const usuario = req.body
        const  sql = 'UPDATE usuarios SET ? WHERE id=?'
        conexao.query(sql, [usuario, id], (err, result) => {
            if(err){    
                res.status(404).json(err)
            } else{
                res.status(200).json(result)
            }
        })
    }
    delete(req, res) {
        const id = req.params.id
        const  sql = 'DELETE FROM usuarios WHERE id=?'
        conexao.query(sql, id, (err, result) => {
            if(err){    
                res.status(404).json(err)
            } else{
                res.status(200).json(result)
            }
        })
    }

}

// Padrão Sigletown
export default new UsuarioController()