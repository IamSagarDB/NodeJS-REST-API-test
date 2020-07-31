const express = require('express')
const app = express()
const mysql = require('mysql')

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/user", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'dropcodes',
        database: 'employee'
    })

    connection.query("SELECT * FROM emp_details", (err, rows, fields) => {
        console.log(err)
        res.json(rows)
    })
})

app.listen(3000, () => {
    console.log("server is up and listening 3000")
})