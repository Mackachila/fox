// When the button is clicked in your HTML
document.getElementById('addStudentButton').addEventListener('click', () => {
  // Student data to be sent to the server as JSON
  const studentData = {
    Name: 'John Doe',
    Admission: '2023001',
    Email: 'johndoe@example.com',
    Contact: '1234567890',
    Password: 'securepassword',
  };

  // Make an HTTP POST request to the server to add the student
fetch('http://localhost:8080/addStudent', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(studentData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then((data) => {
    console.log('Server response:', data);
    alert('Server response: ' + JSON.stringify(data));
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('An error occurred: ' + error.message);
  });

