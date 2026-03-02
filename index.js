const express = require('express');
const app = express();
const PORT = 3001

app.get ('/saude', (req, res) => {
    res.status(201).send('Aplicação Saudável !!!')
});

// sempre será o ultimo
app.listen(PORT, () => {
    console.log (`App Rodando na porta ${PORT}`)
});