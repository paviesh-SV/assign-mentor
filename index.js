import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`
        <div style="text-align: center; background-color:purple; padding: 5px;"
            <h1> Student-Mentor Management System </h1>
        </div>

        <div>
            <div>
                <h2 style="text-align: left; background-color:grey;  padding: 2px;"> Student Endpoints </h2>
            </div>

            <ul>
                <li>
                    <h4>
                        <mark style="backgorund-color: green">POST:</mark> Use the endpoint <mark style="background-color:green"> /api/student/create </mark> to Create a new student 
                    </h4>
                </li>

                <li>
                    <h4>
                        <mark>GET:</mark> Use the endpoint <mark> /api/student/students </mark> to get all students 
                    </h4>
                </li>

                <li>
                    <h4>
                        <mark style="backgorund-color: lightblue">PUT:</mark> Use the endpoint <mark style="background-color: lightblue"> /api/student/assign/:id </mark> to assign a mentor to student 
                    </h4>
                </li>

                <li>
                    <h4>
                        <mark>GET:</mark> Use the endpoint <mark> /api/student/get-particular/:id </mark> to get assigned mentor for a specific student
                    </h4>
                </li>
            </ul>
        </div>
        
        <div>
            <div>
                <h2 style="text-align: left; background-color:grey;  padding: 2px; ">Mentor Endpoints </h2>
            </div>

            <ul>
                <li>
                    <h4>
                        <mark style="backgorund-color: green">POST:</mark> Use the endpoint <mark style="background-color:green"> /api/mentor/create </mark> to Create a new mentor 
                    </h4>
                </li>

                <li>
                    <h4>
                        <mark style="background-color: red;">GET:</mark> Use the endpoint <mark style="background-color: red"> /api/mentor/mentors </mark> to get all mentors 
                    </h4>
                </li>

                <li>
                    <h4>
                        <mark style="backgorund-color: lightblue">PUT:</mark> Use the endpoint <mark style="background-color: lightblue"> /api/mentor/assign/:id </mark> to assign a student to mentor 
                    </h4>
                </li>

                <li>
                    <h4>
                        <mark>GET:</mark> Use the endpoint <mark style="background-color: orangered"> /api/mentor/ment-student/:id </mark> to get assigned student for a specific mentor
                    </h4>
                </li>
            </ul>
        </div>
    `)
})

app.use('/api/mentor', mentorRoutes);
app.use('/api/student', studentRoutes);
connectDB();

const port = process.env.PORT || 5454;

app.listen(port, () => {
    console.log(`App is being hosted on port ${port}`)
})