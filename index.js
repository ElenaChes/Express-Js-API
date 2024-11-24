//[Import]
console.time("Load time");
const express = require("express");
const bodyParser = require("body-parser"); //better request parsing
//Info:
const data = require("./data.json");
const port = 8080;
const url = `http://localhost:${port}/`;

//[Initialize app]
const app = express();
const router = express.Router();

//[Define aid tools]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// [Handle requests]
router.get("/api", async (req, res) => {
  try {
    if (data) return res.status(200).json(data); //OK
    res.sendStatus(410); //Gone
  } catch (error) {
    console.log(error);
  }
  return res.sendStatus(500); //Internal Server Error
});
app.use(router);
app.get("*", (req, res) => res.sendStatus(404)); //Page Not Found on any other paths

//[Launch app]
app.listen(port);
console.log("App launched at: " + url);
console.timeEnd("Load time");
