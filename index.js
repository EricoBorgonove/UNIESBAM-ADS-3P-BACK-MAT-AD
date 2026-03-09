require ('dotenv').config();
const express = require('express');
const app = express();


app.get ('/saude', (req, res) => {
    res.status(201).send('Aplicação Saudável !!!')
});

// sempre será o ultimo
app.listen(process.env.PORT, () => {
    console.log (`App Rodando na porta ${process.env.PORT}`)
});