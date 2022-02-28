const express = require("express");
const router = express.Router();
const Professor = require("../model/Professor");

//create Professor
router.post("/professors", (req, res) => {
    let request = req.body;

    const name = request.Nombres + "";
    const lastName = request.Apellidos + "";
    const bornYear = request.FechaNacimiento + "";
    const idCard = request.CI + "";
    const specialization = request.Especializacion + "";
    const level = request.Nivel + "";
    const email = request.Correo + "";
    const user = request.Usuario + "";
    const password = request.Contraseña + "";
    
    let professor = new Professor(
        {
            "name": name,
            "lastName": lastName,
            "bornYear": bornYear,
            "idCard": idCard,
            "specialization": specialization,
            "disponibility": request.Disponibilidad,
            "level": level,
            "email": email,
            "user": user,
            "password": password,
            "idCourse": [],
            "idSubject": ""
        }
    );

    professor.save((err, requestDB) => {
        if (err) {
            res.json({
                result: false,
                message: "No se pudieron registrar los datos de los docentes.",
                err
            });
        }else {
            res.json({
                result: true,
                message: "Se realizo el ingreso de docentes con éxito.",
                requestDB
            });
        }
    });
});
  
//get all Professors
router.get("/professors", (req, res) => {
    Professor.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a Professor by id
router.get("/professors/:id", (req, res) => {
    const { id } = req.params;
    Professor.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a Professor by username
router.get("/professorByUsername/:username", (req, res) => {
    const { username } = req.params;
    Professor.find({
        user: username
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a professor by level
router.get("/professorsByLevel/:level",(req,res) => {
    const { level } = req.params;
    Professor.find({level: level})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get Professors that do not have subjects
router.get("/professorsWithoutSubjects", (req, res) => {
    const { id } = req.params;
    Professor.find({
        disponibility: 1,
        idSubject: ''
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a Professor
router.put("/professors/:id", (req, res) => {
const { id } = req.params;
const {idCourse, idSubject} = req.body;
    Professor.updateOne({_id: id},{$set: {idCourse, idSubject}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a Professor
router.put("/professorsCourses/:id", (req, res) => {
const { id } = req.params;
const {idCourse} = req.body;
    Professor.updateOne({_id: id},{$set: {idCourse}})
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