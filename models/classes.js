const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Classes = sequelize.define('Classes', {
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
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  passivas: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  items: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
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
