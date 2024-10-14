import { consult } from "../database/conexao.js"

class UsuarioRepository {
    // CRUD
    create(usuario) {
        // Ajuste aqui para usar 'nome' ao invés de 'name'
        const sql = 'INSERT INTO usuarios SET ?'
        return consult(sql, { nome: usuario.name, email: usuario.email, telefone: usuario.telefone, senha: usuario.senha }, 'Não foi possível cadastrar');
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