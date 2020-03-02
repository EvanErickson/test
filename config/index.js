const Sequelize = require('sequelize')

// STEP 1: Create a database called user_db
// STEP 2: Write your specific connection URI into the space below
var sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/user_db', {

})

module.exports = Sequelize
