const express = require('express');

const app = express();

console.log('teste de github')

app.get('/', (req, res) => {
    res.send('Parece que deu certo!');
});

app.listen(3000, () => {
    console.log('Servidor na ativa!');
});