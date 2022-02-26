const express = require("express");
const router = express.Router();
const SchoolYear = require("../model/SchoolYear");

// create school year
router.post("/schoolYears", (req, res) => {
    const schoolYear = SchoolYear(req.body);
    schoolYear
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all school years
router.get("/schoolYears", (req, res) => {
    SchoolYear.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a school year
router.get("/schoolYears/:id", (req, res) => {
    const { id } = req.params;
    SchoolYear.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get the actual school year
router.get("/actualSchoolYear/:actual", (req, res) => {
    const { actual } = req.params;
    SchoolYear.find({
        actual: actual
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a school year
router.put("/schoolYears/:id", (req, res) => {
    const { id } = req.params;
    const {actual} = req.body;
    SchoolYear.updateOne({_id: id},{$set: {actual}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a school year
router.delete("/schoolYears/:id", (req, res) => {
    const { id } = req.params;
    SchoolYear.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;