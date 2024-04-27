const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const HOST = ENVIRONMENT === 'production' ? process.env.DB_HOST_PRD : process.env.DB_HOST_DEV;

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });

app.use(bodyParser.json());

app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});