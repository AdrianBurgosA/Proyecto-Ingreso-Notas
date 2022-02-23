const express = require("express");
const router = express.Router();
const Grades = require("../model/Grades");

//create Grades
router.post("/grades", (req, res) => {
    const grades = Grades(req.body);
    grades
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all Grades
router.get("/grades", (req, res) => {
    Grades.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a Grades
router.get("/grades/:id", (req, res) => {
const { id } = req.params;
    Grades.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a Grades
router.put("/grades/:id", (req, res) => {
const { id } = req.params;
const {grades, idStudent, idProfessor, idSubject, quimester} = req.body;
    Grades.updateOne({_id: id},{$set: {grades, idStudent, idProfessor, idSubject, quimester}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a Grades
router.delete("/grades/:id", (req, res) => {
    const { id } = req.params;
    Grades.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;