const express = require('express');
const app = express();
const PORT = 3030;

app.get('/', (req, res) =>{
    res.send('Aplicação DevFlow rodando com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});