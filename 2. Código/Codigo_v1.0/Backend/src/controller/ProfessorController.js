const express = require("express");
const router = express.Router();
const Professor = require("../model/Professor");

//create Professor
router.post("/professors", (req, res) => {
    const professor = Professor(req.body);
    professor
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all Professors
router.get("/professors", (req, res) => {
    Professor.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a Professor
router.get("/professors/:id", (req, res) => {
const { id } = req.params;
    Professor.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a Professor
router.put("/professors/:id", (req, res) => {
const { id } = req.params;
const {name, lastName, bornYear, idCard, specialization, idCourse, idSubject} = req.body;
    Professor.updateOne({_id: id},{$set: {name, lastName, bornYear, idCard, specialization, email, user, password, idCourse, idSubject}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a Professor
router.delete("/professors/:id", (req, res) => {
    const { id } = req.params;
    Professor.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;