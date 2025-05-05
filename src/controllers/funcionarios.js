const db = require('../dataBase/connection');

module.exports = {

  // Listar todos os funcionarios
  async listarFuncionario(request, response) {
    try {

      const sql = 'SELECT func_id, cargo, usu_id FROM funcionarios;';
      
      const [rows] = await db.query(sql);

      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Formas Funcionarios.',
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

  // Cadastrar funcionarios
  async cadastrarFuncionario(request, response) {
    try {

      const {cargo, usu_id} = request.body;

      //instrução SQL
      const sql = `
          INSERT INTO funcionarios
              (cargo, usu_id)
          VALUES
              (?, ?);
        `;

        // definição dos dados a serem inseridos em array
        const values = [cargo, usu_id];

        //execução da instrução sql passando os parâmetros
        const [result] = await db.query(sql, values);

        // identificação do ID doregistro inserido
        const dados = {
            id: result.insertId,
            cargo,
            usu_id
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

 // Editar funcionarios
  async editarFuncionario(request, response) {
    try {
      // parâmetros recebidos pelo corpo da requisição
      const {cargo, usu_id} = request.body;
      // parâmetros recebido pela URL via params ex: /usuario/1
      const {func_id} = request.params;
      //instruções SQL
      const sql = `UPDATE funcioarios SET cargo = ? WHERE usu_id = ? WHERE = func_id = ?;`;
      // preparo do array com dados que serão atualizados
      const values = [cargo, usu_id, func_id];
      // execução e obtenção de firmação da atualização realizada
      const [rows] = await db.query(sql, values);

    return response.status(200).json({
      sucesso: true,
      mensagem: 'Editar Funcionarios.',
      itens: rows.length,
      dados: rows
    });
  } catch (error) {
    return response.status(500).json({
      sucesso: false,
      mensagem: 'Erro na requisição.',
      dados: error.mensage
    });
  }
},

  // Apagar funcionarios
  async apagarFuncionario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Funcionarios.',
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
