const User = require("../model/User.model");
const bcrypt = require("bcryptjs");

const config = require("../config/configuration");
const mongoose = require("mongoose");
module.exports.ajouterUser = async (req, res) => {
  let result = await User.findOne({
    // verifier si l'utilisateur existe a travere email
    email: req.body.email,
  });
  if (result) {
    res.json({
      message: "email existant ",
    });
  } else {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let newUSer = new User({
      name: req.body.name,
      firstName: req.body.firstName,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      role: req.body.role,
    });
    let result = await newUSer.save();
    res.json({
      message: result,
    });
  }
};

module.exports.loginUser = async (req, res) => {
  const email = req.body.email; // recupération de la valeur email d'utilisateur
  const password = req.body.password;
  let result = await User.findOne({ email: email }); // recherche si l'utilisateur existe et l'affécté à la variable result
  if (result) {
    console.log(result.password);

    let verif = await bcrypt.compare(password, result.password);
    console.log(verif);
    if (verif) {
      let token = jwt.sign({ id: result._id }, config.SECRET, {
        // generation du token de l'authentification
        expiresIn: 86400, // expires in 24 hours
      });
      res.json({
        auth: true,
        token: token,
        user: result,
      });
    } else {
      res.json({
        auth: false,
        message: " Email ou mot de passe incorrect",
      });
    }
  } else {
    res.json({
      auth: false,
      message: " Email ou mot de passe incorrect",
    });
  }
};

module.exports.gettAllUser = async (req, res) => {
  let result = await User.find().populate("role",["role"]); // recupération de tous les utilisateurs
  res.json({
    users: result,
  });
};
module.exports.updateUser = async (req, res) => {
  try {
    const dataToUpdate = req.body;
    let { ...updateData } = dataToUpdate;

    let result = await User.findOneAndUpdate(req.params.id, updateData, {
      new: true,
    });
    console.log(result);
  } catch (error) {}
};
module.exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "success",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
