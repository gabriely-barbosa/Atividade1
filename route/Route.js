//Importa o pacote do express para o index.js
const express = require('express');

//Conexão com a tabela
const modelCategoria = require('../model/TabelaModel')

//Gerenciador de rotas do express
const Router = express.Router();

//Rotas de CRUD de categoria
//Rota de cadastro de categoria
Router.post('/cadastrarCategoria', (req, res) => {
    res.send('Rota de cadastro de categoria!');

    console.log(req.body);

    //let nome_categoria = req.body.nome_categoria
    let {nome_categoria} = req.body;

    modelCategoria.create(
        //Dados da inserção
        {nome_categoria}
    ).then(
        res.send('Categoria cadastrada com sucesso!')
    )
});

//Rota de listagem de categoria
Router.get('/listarCategoria', (req, res) => {
    res.send('Rota de listagem de categoria!');

    modelCategoria.findAll()
    .then(
        (response)=>{
            res.status(200).json(response);
        }
    )
});

//Rota de alteração de categoria
Router.put('/alterarCategoria', (req, res) => {
    res.send('Rota de alteração de categoria!');

    // const cod_categoria = req.body.cod_categoria;
    // const nome_categoria = req.body.cod_categoria;
    const {cod_categoria, nome_categoria} = req.body;

    modelCategoria.update(
        {nome_categoria},
        {where:{cod_categoria}}
    ).then(
        res.send('Categoria alterada com sucesso!')
    )
});

//Rota de exclusão de categoria
Router.delete('/deletarCategoria', (req, res) => {
    res.send('Rota de exclusão de categoria!')
});

module.exports = Router;