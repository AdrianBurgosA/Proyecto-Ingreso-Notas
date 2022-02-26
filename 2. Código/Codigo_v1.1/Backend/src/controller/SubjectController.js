const express = require("express");
const router = express.Router();
const Subject = require("../model/Subject");

//create Subject
router.post("/subjects", (req, res) => {
    let request = req.body;

    const name = request.Nombre + "";
    const level = request.Nivel + "";
    
    let subject = new Subject(
        {
            "name": name,
            "level": level,
            "type": request.Tipo
        }
    );

    subject.save((err, requestDB) => {
        if (err) {
            res.json({
                result: false,
                message: "No se pudieron registrar los datos de las materias.",
                err
            });
        }else {
            res.json({
                result: true,
                message: "Se realizo el ingreso de las materias con éxito.",
                requestDB
            });
        }
    });
});
  
//get all Subjects
router.get("/subjects", (req, res) => {
    Subject.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get Subjects by type
router.get("/subjectsByType", (req, res) => {
    Subject.find({
        type: 1
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get Subjects by level
router.get("/subjectsByLevel/:level", (req, res) => {
    const { level } = req.params;
    Subject.find({
        level: level
    })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get Subjects by type 1 or 0
router.get("/subjectsByTypeAndLevel/:type/:level", (req, res) => {
    const { type, level } = req.params;
    Subject.find({
        type: type,
        level: level
    })
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
const {name, level, type} = req.body;
    Subject.updateOne({_id: id},{$set: {name, level, type}})
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