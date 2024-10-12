import { consult } from "../database/conexao.js"

class UsuarioRepository {
    // CRUD
    create(usuario) {
        const  sql = 'INSERT INTO usuarios SET ?'
        return consult(sql, usuario, 'Não foi possivel cadastrar')
    }

    findAll() {
        const  sql = 'SELECT * FROM usuarios'
        return consult(sql, 'Não foi possivel achar')
    }

    findById(id) {
        const  sql = 'SELECT * FROM usuarios WHERE id=?'
        return consult(sql, id, 'Não foi possivel achar o ID')
    }
    update(usuario, id) {
        const  sql = 'UPDATE usuarios SET ? WHERE id=?'
        return consult(sql, [usuario, id], 'Não foi possivel atualizar')
    }
    delete(id) {
        const  sql = 'DELETE FROM usuarios WHERE id=?'
        return consult(sql, id, 'Não foi possivel deletar')
    }

}

export default new UsuarioRepository()