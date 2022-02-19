const express = require("express");
const router = express.Router();
const Student = require("../model/Student");

//create Student
router.post("/students", (req, res) => {
    const student = Student(req.body);
    student
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all Students
router.get("/students", (req, res) => {
    Student.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a Student
router.get("/students/:id", (req, res) => {
const { id } = req.params;
    Student.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a Student
router.put("/students/:id", (req, res) => {
const { id } = req.params;
const {name, lastName, bornYear, idCard, genre, nationality, email, user, password, idCourse} = req.body;
    Student.updateOne({_id: id},{$set: {name, lastName, bornYear, idCard, genre, nationality, email, user, password, idCourse}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a Student
router.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    Student.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;