const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",     
  user: "root",          
  password: "Vamsi@1234", 
  database: "schooldb",   
  port: 3306             
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed: ", err);
    return;
  }
  console.log("✅ Connected to MySQL Database!");
});

module.exports = db;
