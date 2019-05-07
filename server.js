const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors()) 

mongoose
  .connect(
    //'mongodb+srv://gege:1234@cluster0-bqys6.mongodb.net/test?retryWrites=true',
      'mongodb://geraldo:gege04@ds135399.mlab.com:35399/gerenciador',
    // 'mongodb+srv://<USUARIO>:<SENHA>@cluster0-plxve.mongodb.net/node-api?retryWrites=true',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);