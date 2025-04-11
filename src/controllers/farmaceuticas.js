const db = require('../dataBase/connection');

module.exports = {

  // Listar todas as formas farmaceuticas
  async listarFarmaceutica(request, response) {
    try {

      const sql = 'SELECT forma_id, forma_nome FROM formasfarmaceuticas;';

      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Formas Farmaceuticas.',
        itens: rows.length,
        dados: rows
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Cadastrar uma nova forma farmaceutica
  async cadastrarFarmaceutica(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Formas farmaceuticas.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // Editar uma forma farmaceutica
  async editarFarmaceutica(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar formas farmaceuticas.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  // Apagar uma forma farmaceutica
  async apagarFarmaceutica(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar formas farmaceuticas.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  }, 
}
