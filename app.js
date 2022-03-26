const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(5500, () => {
  console.log("Server started on port 5500");
});
