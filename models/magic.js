const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Magic = sequelize.define('Magic', {
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
  magias_0: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_1: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_2: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_3: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_4: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_5: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_6: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_7: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_8: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
  magias_9: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  }
}, {
  timestamps: true,  // Cria automaticamente createdAt e updatedAt
  tableName: 'magic',  // Nome da tabela no banco
});

module.exports = Magic;
