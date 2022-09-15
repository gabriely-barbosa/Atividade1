const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Parece que deu certo!');
});

app.listen(3000, () => {
    console.log('Servidor na ativa!');
});