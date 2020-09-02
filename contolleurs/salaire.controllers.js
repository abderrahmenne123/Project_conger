const salaire = require("../model/Salaire.model");
const config = require('../config/configuration');
module.exports.addsalaire = async (req, res) => {
  let newsalaire = new salaire({
    salaire: req.body.salaire,
    salarier: req.body.salarier,
  });
  let result = await newsalaire.save();
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
  let result = await salaire.find().populate("salarier", ["name", "firstName"]);

  res.json({
    error: false,
    message: result,
  });
};

module.exports.updatesalire = async (req, res) => {
  try {
    const dataToUpdate = req.body;
    let { ...updateData } = dataToUpdate;

    let result = await salaire.findOneAndUpdate(req.params.id, updateData, {
      new: true,
    });
  } catch (error) {}
  res.json({
    message: "update ...",
    error: false,
  });
};
