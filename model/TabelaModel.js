//Importação do pacote SEQUELIZE
const Sequelize = require('sequelize');

//Importação do arquivo de Conexão com o BD
const connection = require('../database/Database');

const modelCategoria = connection.define(
    'tbl_categoria',
    {
        cod_categoria:{
            type: Sequelize.INTEGER,
            primarykey: true,
            //autoIncrement: true
        },
        nome_categoria:{
            type: Sequelize.STRING(100),
            allowNull: false 
        }
    }
);

// modelCategoria.sync({force:true});

module.exports = modelCategoria;