const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// figure out how to star review. like code quiz?

class Book extends Model {}

module.exports = Book;