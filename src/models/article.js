'use strict';
const {
  Model
} = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  article.init({
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    title: DataTypes.STRING,
    keywords: {
      type: DataTypes.ARRAY(DataTypes.STRING),

    },
    fulltext: DataTypes.TEXT,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};