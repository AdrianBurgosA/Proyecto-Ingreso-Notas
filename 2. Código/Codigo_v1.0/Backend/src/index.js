const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const SchoolYear = require("./controller/SchoolYearController");
const Course = require("./controller/CourseController");
const Subject = require("./controller/SubjectController");
const Professor = require("./controller/ProfessorController");
const Student = require("./controller/StudentController");
const Grades = require("./controller/GradesController");

const app = express();
const port = process.env.PORT || 3001;
var cors = require('cors');
app.use(cors());


//middleware
app.use(express.json());
app.use(SchoolYear);
app.use(Course);
app.use(Subject);
app.use(Professor);
app.use(Student);
app.use(Grades);

//routes
app.get('/', (req,res) =>{
    res.send("Welcome to my API - UE Liceo La Siembra");
});

//mongodb connection
mongoose
.connect("mongodb+srv://LaSiembra:liceo_la_siembra123@cluster0.gen89.mongodb.net/SistemaNotas?retryWrites=true&w=majority")
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log("server is listening on port", port));
