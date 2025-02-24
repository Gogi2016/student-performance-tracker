// testConnection.js
const connection = require('./backend/db');

// Query to select all students
connection.query('SELECT * FROM students', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Student Records:', results);
});

// Close the connection
connection.end();
