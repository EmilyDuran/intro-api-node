const db = require('../dataBase/connection');

module.exports = {

  // Listar todas as formas farmaceuticas
  async listarFarmaceutica(request, response) {
    try {

      const sql = 'SELECT forma_id, forma_nome FROM forma_farmaceutica;';

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
      
      const {forma_nome} = request.body;

      //instrução SQL
      const sql = `
          INSERT INTO forma_farmaceutica
              (forma_nome)
          VALUES
              (?);
        `;

        // definição dos dados a serem inseridos em array
        const values = [forma_nome];

        //execução da instrução sql passando os parâmetros
        const [result] = await db.query(sql, values);

        // identificação do ID doregistro inserido
        const dados = {
            id: result.insertId,
            forma_nome
        };

        return response.status(200).json({
            sucesso: true,
            mensagem: 'Cadastro de usuários',
            dados: dados
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
        // parâmetros recebidos pelo corpo da requisição
        const {forma_nome} = request.body;
        // parâmetros recebido pela URL via params ex: /usuario/1
        const {usu_id} = request.params;
        //instruções SQL
        const sql = `UPDATE uduarios SET forma_nome = ?`;
        // preparo do array com dados que serão atualizados
        const values = [forma_nome];
        // execução e obtenção de firmação da atualização realizada
        const atualizaDados = await db.query(sql, values);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Usuário ${usu_id} atualizado com sucesso!',
        dados: atualizaDados[0].affectedRows
        //mensSql: atualizaDados
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
