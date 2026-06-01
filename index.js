require ('dotenv').config();
const express = require('express');
const general = require ('./routes/general.routes');
const userRoutes = require ('./routes/user.routes');
const app = express();

app.use('/general', general);

app.use ('/users', userRoutes);


// sempre será o ultimo
app.use ((req, res, next) =>{
    res.status(404).send("Não encontrado");
});
app.listen(process.env.PORT, () => {
    console.log (`App Rodando na porta ${process.env.PORT}`)
});