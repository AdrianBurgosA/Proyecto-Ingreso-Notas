const express = require("express");
const router = express.Router();
const Course = require("../model/Course");

//create course
router.post("/courses", (req, res) => {
    const course = Course(req.body);
    course
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all courses
router.get("/courses", (req, res) => {
    Course.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a course
router.get("/courses/:id", (req, res) => {
const { id } = req.params;
    Course.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a course
router.put("/courses/:id", (req, res) => {
const { id } = req.params;
const {level, parallel, idSchoolYear} = req.body;
    Course.updateOne({_id: id},{$set: {level, parallel, idSchoolYear}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a course
router.delete("/courses/:id", (req, res) => {
    const { id } = req.params;
    Course.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;