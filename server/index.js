const express = require('express')
const app = express()
const port = 3000
const conn = require('./connection/connect')
const cors = require('cors')
const router =  require('./routes')
const errHandler = require('./helper/errHandler')

conn.run()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(router)
app.use(errHandler)

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
