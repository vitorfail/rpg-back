const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Classes = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  classe: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subclasse: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  talentos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  passivas: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  items: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  xp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nivel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  alinhamento: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  timestamps: true,  // Cria automaticamente createdAt e updatedAt
  tableName: 'classes',  // Nome da tabela no banco
});

module.exports = Classes;
