const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser'); // For parsing JSON requests
const app = express();
const port = 3000;

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mackachila',
  password: 'JareD6470',
  database: 'mackachila_college',
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});

// Define an endpoint to add a student
app.post('/addStudent', (req, res) => {
  // Data to be inserted (received from the client as JSON)
  const studentData = req.body;

  // Query to insert data into 'existing_student' table
  const query = 'INSERT INTO existing_student SET ?';

  // Execute the query with the data object
  connection.query(query, studentData, (queryError, results) => {
    if (queryError) {
      console.error('Error executing the query: ' + queryError);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Data inserted successfully with ID: ' + results.insertId);
    res.status(200).json({ message: 'Data inserted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
