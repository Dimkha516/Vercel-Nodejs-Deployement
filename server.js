const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./Connection/connect");
const usersRoutes = require("./Routes/user.routes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;

// CHARGER LE FICHIER YAML:
const swaggerDocument = YAML.load("swagger.yaml"); 

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// CONNEXION TO CLUSTER:
connectDB();

// MIDDLEWARES:
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log("running on port: " + port);
});
