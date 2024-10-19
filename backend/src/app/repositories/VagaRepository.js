import { consult } from "../database/conexao.js";

class VagaRepository{

    create(vaga) {
        const sql = 'INSERT INTO vagas SET ?'
        return consult(sql, { titulo: vaga.titulo, descricao: vaga.descricao, link: vaga.link }, 'Não foi possível cadastrar vaga')
    }

    findAll(){
        const sql = 'SELECT * FROM vagas'
        return consult(sql, 'Não foi possível achar')
    }

    delete(id) {
        const  sql = 'DELETE FROM vagas WHERE idvagas=?'
        return consult(sql, id, 'Não foi possivel deletar')
    }

}

export default new VagaRepository()