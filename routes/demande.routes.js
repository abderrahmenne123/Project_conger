const express = require("express");
const DemandeController = require("../contolleurs/damande.controllers");

const router = express.Router(); 

router.post("/addemande", DemandeController.ademande);
router.get("/getdemande", DemandeController.getAll);
router.delete("/:id", DemandeController.deleteDemande);
module.exports = router; 
