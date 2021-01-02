const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

// passo 3 enviar uma mensagem no locahost:3000
app.get('/', (req, res) => res.send('olá mundo'));

//Passo 2 mostrar a mensagem no console.log
app.listen(port, () => console.log('APi rando na porta 3000'));
