const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/db');

dotenv.config();

const app = express();

// Middleware para analisar o corpo da requisição
app.use(bodyParser.json());
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json({limit: '534kb', extended: false }));
app.use(express.urlencoded({limit: '534kb', extended: true }));
app.use(function(req, res, next) {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Definindo rotas
app.use('/api/auth', authRoutes);
app.get('/', async (req, res) => {res.status(200).json({"message":"Não usamos essa entrada paizão"})});
async function inicio(){
  const users = require('./models/user.js');
  const pontos = require('./models/pontos.js');
  const magic = require('./models/magic.js');
  const classes = require('./models/classes.js');
  const aparencia = require('./models/aparencia.js');
  await sequelize.sync();
  console.log("conectado ao banco de dados")   
}
inicio()
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.sync(); // Sincroniza o banco de dados (cria as tabelas se não existirem)
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
});
