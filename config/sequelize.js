require('dotenv').config();
const { Sequelize } = require('sequelize');

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const DATABASE = ENVIRONMENT === 'production' ? process.env.DB_NAME_PRD : process.env.DB_NAME_DEV;
const USERNAME = ENVIRONMENT === 'production' ? process.env.DB_USER_PRD : process.env.DB_USER_DEV;
const PASSWORD = ENVIRONMENT === 'production' ? process.env.DB_PASS_PRD : process.env.DB_PASS_DEV;
const HOST = ENVIRONMENT === 'production' ? process.env.DB_HOST_PRD : process.env.DB_HOST_DEV;

const sequelize = new Sequelize({
    database: DATABASE,
    username: USERNAME,
    password: PASSWORD,
    host: HOST,
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