const express = require("express");
const router = express.Router();
const Course = require("../model/Course");

//create course
router.post("/courses", (req, res) => {
    let request = req.body;

    const number = request.Numero + "";
    const parallel = request.Paralelo + "";
    const level = request.Nivel + "";
    
    let course = new Course(
        {
            "number": number,
            "parallel": parallel,
            "level": level,
            "idSchoolYear": ""
        }
    );

    course.save((err, requestDB) => {
        if (err) {
            res.json({
                result: false,
                message: "No se pudieron registrar los datos de los cursos.",
                err
            });
        }else {
            res.json({
                result: true,
                message: "Se realizo el ingreso de los cursos con éxito.",
                requestDB
            });
        }
    });
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

//get a course by level
router.get("/coursesByLevel/:level",(req,res) => {
    const { level } = req.params;
    Course.find({level: level})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

//get courses without school year
router.get("/coursesWithoutSchoolYear", (req, res) => {
    Course.find({
        idSchoolYear: ''
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a course
router.put("/courses/:id", (req, res) => {
    const { id } = req.params;
    const {idSchoolYear} = req.body;
        Course.updateOne({_id: id},{$set: {idSchoolYear}})
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