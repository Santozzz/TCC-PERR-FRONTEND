import conexao from "../database/conexao.js"

class UsuarioRepository {
    // CRUD
    create(usuario) {
        const  sql = 'INSERT INTO usuarios SET ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, usuario, (err, result) => {
                if(err) return reject('Não foi possivel cadastrar')
                    // Fazer o parse dos resultados 
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)    
            })
        })
    }

    findAll() {
        const  sql = 'SELECT * FROM usuarios'
        return new Promise((resolve, reject) => {
            conexao.query(sql, (err, result) => {
                if(err) return reject('Não foi possivel localizar')
                    // Fazer o parse dos resultados 
                    const row = JSON.parse(JSON.stringify(result))
                    return resolve(row)    
            })
        })
    }

    findById(id) {
        const  sql = 'SELECT * FROM usuarios WHERE id=?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (err, result) => {
                if(err) return reject('Id não encontrado')
                    const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    update(usuario, id) {
        const  sql = 'UPDATE usuarios SET ? WHERE id=?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, [usuario, id], (err, result) => {
                if(err) return reject('Não foi possivel atualizar')
                    const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    delete(id) {
        const  sql = 'DELETE FROM usuarios WHERE id=?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (err, result) => {
                if(err) return reject('Não foi possivel apagar')
                    const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

}

export default new UsuarioRepository()