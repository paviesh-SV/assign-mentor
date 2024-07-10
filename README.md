# NodeJS TASK 3 : Student-Mentor Management System
--------------------------------
This system is used to manage student and mentor database, we can create student and mentor details, get all the student and mentor details, assign student to mentor and vice-versa.


## API Endpoints

### Student Routes

-  `POST /api/student/create`: Create a new student.
-  `GET /api/student/students`: Get all students.
-  `PUT /api/student/assign/:id`: Assign a mentor to a student.
-  `GET /api/student/get-particular/:id`: Get the assigned mentor for a student.


### Mentor Routes

-  `POST /api/mentor/create`: Create a new mentor.
-  `GET /api/mentor/mentors`: Get all mentors.
-  `PUT /api/mentor/assign/:id`: Assign students to a mentor.
-  `GET /api/mentor/ment-student/:id`: Get students assigned to a specific mentor.


## Programming Languages Used

- NodeJS

- ExpressJS


## Tools Used

- VS Code

- POSTMAN

- MongoDB


## Setup

1.  Clone the repository: `git clone <repository-url>`
2.  Navigate to the project directory: `cd mentor-student-management`
3.  Install dependencies: `npm install`
4.  Create a `.env` file in the project root and define the MongoDB connection string.
5.  Start the server: `npm start`
6.  Access the application at `http://localhost:<port>`


## Deployed URL Link

*Check out My NodeJS Here*👉🏻 [![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://assign-mentor-80w5.onrender.com)


## .env Schema

- Create a `.env` file in the directory.
   - Define the following variables:

     ```plaintext
     PORT= <Your Port Number>
     MONGODB_URI=<your-mongodb-uri>
     ```