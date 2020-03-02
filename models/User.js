const { Model, STRING } = require('sequelize')

class User extends Model { }

User.init({
    username: { type: STRING }
}, { sequelize: require('../config'), modelName: 'user' })

module.exports = User