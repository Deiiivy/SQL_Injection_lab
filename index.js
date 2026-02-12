const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "deivy",
  password: "deivy",
  database: "sqli_lab",
});



db.connect(err => {
  if (err) throw err;
  console.log("MariaDB Connected");
});

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const query = `
    SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

  console.log(query);

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

app.listen(3000, () => {
  console.log("Running on 3000");
});
