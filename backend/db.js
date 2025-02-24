// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '981021@Lutho', // replace with your MySQL root password
  database: 'student_tracker' // replace with the name of your database
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database with id ' + connection.threadId);
});

module.exports = connection;
