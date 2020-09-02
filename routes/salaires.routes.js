const express = require("express");
const SalaireController = require("../contolleurs/salaire.controllers");

const router = express.Router(); 

router.post("/addsalaire", SalaireController.addsalaire);
router.get("/allsalaire", SalaireController.getAll);
router.put("/:id", SalaireController.updatesalire);

module.exports = router; 
