## API File for Managing Students

In this project, you will be implementing an API to manage student data using Node.js and Express. The API will allow users to perform CRUD (Create, Read, Update, Delete) operations on student records, including fetching all students, creating a new student, updating an existing student, deleting a student, and fetching a single student by ID.

### Setup Instructions

Follow these steps to set up the project:

Clone the repository:

```bash

git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Install dependencies:

```bash
npm install
```

- Create a new file named app.js in the root of your project directory. This file will contain the API code.

- Open app.js
- Implement the routes for managing students (GET all students, POST student, PUT student, DELETE student, GET one student) in app.js. Use an in-memory array or a database for storing student data. You can start with a simple in-memory array for testing purposes.

- Test your API locally to ensure it's working as expected. You can use tools like Postman or curl to test the API endpoints.

Once you are satisfied with the API implementation and testing on your local machine, proceed to run test.

Run the Jest tests locally to ensure they pass successfully:

```bash
npm test
```

## API Endpoints

The API will have the following endpoints:

- GET all students: Retrieve a list of all students.

URL: /api/students

Method: GET

Response: Array of student objects, each containing 'id' and 'name' properties.

- POST student: Create a new student.

URL: /api/students

Method: POST

Request Body: JSON object with 'id' and 'name' properties for the new student.

Response: JSON object representing the newly created student.

- PUT student: Update an existing student.

URL: /api/students/:id

Method: PUT

Parameters: 'id' - The ID of the student to update.

Request Body: JSON object with 'name' property containing the updated name for the student.

Response: JSON object representing the updated student.

- DELETE student: Delete a student.

URL: /api/students/:id

Method: DELETE

Parameters: 'id' - The ID of the student to delete.

Response: JSON object with a message indicating successful deletion.

- GET one student: Retrieve a single student by ID.

URL: /api/students/:id

Method: GET

Parameters: 'id' - The ID of the student to fetch.

Response: JSON object representing the student with the specified ID.
