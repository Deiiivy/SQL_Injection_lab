const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE users (email TEXT, password TEXT)");
  db.run("INSERT INTO users VALUES ('admin@test.com','1234')");
});

app.post('/login', (req,res)=>{
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

  console.log(query);

  db.all(query, [], (err, rows)=>{
    if(rows.length>0){
      res.json({success:true});
    } else {
      res.json({success:false});
    }
  });
});

app.listen(3000);
console.log("Running on 3000");

