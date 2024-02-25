require('dotenv').config({ path: path.resolve(__dirname, `./.env.${process.env.NODE_ENV}`) });
const { createHmac } = require('crypto')
const { mailer } = require('./utils/mailer');
const path = require('path')
const mysql = require('mysql');



let databaseCon = mysql.createPool({
    host: process.env.MySQL_host,
    user: process.env.MySQL_user,
    password: process.env.MySQL_pass,
    database: process.env.MySQL_db,
    multipleStatements: true,})
databaseCon.getConnection((error) => {
    if (error) {console.log('there is an error bro!' + error)
    } else {console.log('connected to datbase!')}})

    // Arguments
    const name = process.argv[2];
    const email = process.argv[3];
    const password = process.argv[4];
    const role = process.argv[5];
    

    // console.log(createHmac('sha256', 'secret').update('msi').digest('hex'));
    // NODE_ENV=development node worker.js x x x x
