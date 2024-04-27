require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: process.env.DB_NAME_DEV || 'productnodejsdb_development',
    username: process.env.DB_USER_DEV || 'root',
    password: process.env.DB_PASS_DEV || 'root',
    host: process.env.DB_HOST_DEV || '127.0.0.1',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com MySQL bem-sucedida');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MySQL:', err);
    });

module.exports = sequelize;