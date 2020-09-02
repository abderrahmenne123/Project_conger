const express = require("express");
const UserController = require("../contolleurs/users.controllers");

const router = express.Router(); 

router.post("/add", UserController.ajouterUser);
router.post("/login", UserController.loginUser);
router.get("/allusers", UserController.gettAllUser);
router.put("/:id",UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router; 
