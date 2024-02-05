const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}
/**
 * Initializes the Tag model by:
 * - Defining the Tag model schema, datatypes and metadata like timestamps.
 * - Syncing the Tag model with the database.
 *
 * This sets up the Tag model for use in other parts of the application.
 */
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
