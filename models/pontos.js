const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pontos = sequelize.define('Pontos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  vida: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  inspiracao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  forca: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  destreza: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  constituicao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  inteligencia: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sabedoria: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  carisma: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  timestamps: true,  // Cria automaticamente createdAt e updatedAt
  tableName: 'pontos',  // Nome da tabela no banco
});

module.exports = Pontos;
