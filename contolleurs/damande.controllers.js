const demande = require("../model/demande.model");
const config = require('../config/configuration');
module.exports.ademande = async (req, res) => {
  let newdemande= new demande({
    name: req.body.name,
    comment: req.body.comment,
    salarier: req.body.salarier,
    date_depart: req.body.date_depart,
    date_retour: req.body.date_retour
  });
  let result = await newdemande.save();
  if (result) {
    res.json({
      message: result,
      error: false,
    });
  } else {
    res.json({
      message: "Erreur est servenu",
      error: true,
    });
  }
};

module.exports.getAll = async (req, res) => {
  let result = await demande.find().populate("salarier", ["name", "firstName"]);

  res.json({
    error: false,
    message: result,
  });
};

module.exports.deleteDemande = async (req, res) => {
  try {
    await demande.findByIdAndDelete(req.params.id);

    res.json({
      message: "success",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
