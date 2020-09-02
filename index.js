const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/configuration");
const userRoutes = require("./routes/users.routes");
const SalaireRoutes = require("./routes/salaires.routes");
const DemandeRoutes = require("./routes/demande.routes");
const RolesRoutes = require("./routes/roles.routes");

const app = express();

mongoose
  .connect(config.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.log(err);
  });
// permet de 'accesser au 'Body' de la requete envoyé
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// déclaration des routes
app.use("/users", userRoutes);
app.use("/salaire", SalaireRoutes);
app.use("/demande", DemandeRoutes);
app.use("/roles", RolesRoutes);

/*app.listen(3010,()=>{ //lencement de serveur sous le port 3010 
    console.log("en marche ..."); 
})*/
app.listen(3000, () => {
  // ecoute sur le port definit et crée le server
  console.log("en exécution ...");
});
