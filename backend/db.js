const mysql = require("mysql2");

// ✅ Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",     // since you’re running locally
  user: "root",          // default MySQL user
  password: "Vamsi@1234", // your password
  database: "schooldb",   // we will create this DB
  port: 3306             // default MySQL port
});

// ✅ Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed: ", err);
    return;
  }
  console.log("✅ Connected to MySQL Database!");
});

module.exports = db;
