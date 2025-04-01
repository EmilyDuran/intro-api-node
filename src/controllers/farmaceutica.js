const db = require('../dataBase/connection');

module.exports = {
    async listarFarmaceutica(request, response){
        try{
            return response.status(200).json({
                sucesso: true,
<<<<<<< Updated upstream
                mensagem: 'Lista de Farmaceuticas.',
                dados: null
            });
        }catch(error) {
=======
                mensagem: 'Lista de Produções.',
                dados: null
            });
        }catch (error) {
>>>>>>> Stashed changes
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.mensage
            });
        }
    }
}