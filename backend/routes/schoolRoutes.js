const express = require("express");
const multer = require("multer");
const path = require("path");
const db = require("../db");

const router = express.Router();

// ✅ Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/schoolImages");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// ✅ Insert School API
router.post("/", upload.single("image"), (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const imagePath = req.file ? `/schoolImages/${req.file.filename}` : null;

  const sql =
    "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?,?,?,?,?,?,?)";

  db.query(sql, [name, address, city, state, contact, imagePath, email_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to insert school" });
    }
    res.json({ message: "✅ School added successfully", id: result.insertId });
  });
});

// ✅ Get All Schools API
router.get("/", (req, res) => {
  db.query("SELECT * FROM schools", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch schools" });
    }
    res.json(result);
  });
});

module.exports = router;
