const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'first_health'
})

const run = () => {
        connection.connect(function(err) {
        if(err) {
            console.log('error connecting: ' + err.stack)
            return
        }
        console.log('connected as id ' + connection.threadId)
    })
}

module.exports = {run, connection}
