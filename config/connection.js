const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:Monkey23@localhost/wbgtq288ibu8axko')

module.exports = connection
