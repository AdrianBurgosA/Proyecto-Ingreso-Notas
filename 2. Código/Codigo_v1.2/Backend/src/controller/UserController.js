const express = require("express");
const router = express.Router();
const User = require("../model/User");

//create User
router.post("/users", (req, res) => {
    let request = req.body;

    let user = new User(
        {
            "email": request.email,
            "user": request.user,
            "password": request.password,
            "type": request.type
        }
    );

    user.save((err, requestDB) => {
        if (err) {
            res.json({
                result: false,
                message: "No se pudieron registrar los datos del usuario.",
                err
            });
        }else {
            res.json({
                result: true,
                message: "Se realizo el ingreso del usuario con éxito.",
                requestDB
            });
        }
    });
});
  
//get all Users
router.get("/users", (req, res) => {
    User.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a User
router.get("/users/:id", (req, res) => {
const { id } = req.params;
    User.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a User
router.put("/users/:id", (req, res) => {
const { id } = req.params;
const {email, user, password, type} = req.body;
    User.updateOne({_id: id},{$set: {email, user, password, type}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a User
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    User.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;