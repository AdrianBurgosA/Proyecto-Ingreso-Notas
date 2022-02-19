const express = require("express");
const router = express.Router();
const Subject = require("../model/Subject");

//create Subject
router.post("/subjects", (req, res) => {
    const subject = Subject(req.body);
    subject
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all Subjects
router.get("/subjects", (req, res) => {
    Subject.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a Subject
router.get("/subjects/:id", (req, res) => {
const { id } = req.params;
    Subject.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a Subject
router.put("/subjects/:id", (req, res) => {
const { id } = req.params;
const {name, level} = req.body;
    Subject.updateOne({_id: id},{$set: {name, level}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a Subject
router.delete("/subjects/:id", (req, res) => {
    const { id } = req.params;
    Subject.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;