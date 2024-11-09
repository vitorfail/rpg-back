const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Aparencia = sequelize.define('Aparencia', {
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
  sexo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  peso: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  altura: {
    type: DataTypes.INTEGER,
    allowNull: true
  },  
  raca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cor_pele: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cor_pelo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  raca: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chapeu: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  barba: {
    type: DataTypes.STRING,
    allowNull: true,
  },

}, {
  timestamps: true,  // Cria automaticamente createdAt e updatedAt
  tableName: 'aparencia',  // Nome da tabela no banco
});

module.exports = Aparencia;
