const express = require ('express');
const router = express.Router();
const path = require('path');   

router.get ('/saude', (req, res) => {
    res.status(201).send('Aplicação Saudável !!!')
});

router.get ('/algo', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', 'algo.html' ))
});

module.exports = router