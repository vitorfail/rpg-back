const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  classe: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  subclasse: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  talentos: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_0: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_1: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_2: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_3: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_4: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_5: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_6: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_7: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_8: {
    type: DataTypes.ARRAY,
    allowNull: true,
  },
  magias_9: {
    type: DataTypes.ARRAY,
    allowNull: true,
  }
}, {
  timestamps: true,  // Cria automaticamente createdAt e updatedAt
  tableName: 'users',  // Nome da tabela no banco
});

module.exports = User;
