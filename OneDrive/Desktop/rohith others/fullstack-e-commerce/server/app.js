const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

//const { format } = require("date-fns");

const app = express();
const cors = require('cors');
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");


const dbPath = path.join(__dirname, "shopping.db");
let dbConnectionObject = null;
const initializeDBAndServer = async () => {
  try {
    dbConnectionObject = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(8385, () => {
      console.log("Server Running at http://localhost:8385/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();


// User Register
app.post("register/",(requestObject,responseObject)=>{
  console.log(requestObject)
});