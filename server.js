const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/db');

dotenv.config();

const app = express();

// Middleware para analisar o corpo da requisição
app.use(bodyParser.json());

// Definindo rotas
app.use('/api/auth', authRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.sync(); // Sincroniza o banco de dados (cria as tabelas se não existirem)
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
});
