const express = require("express");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());
app.use("/schoolImages", express.static("public/schoolImages")); // serve images

// ✅ Routes
app.use("/api/schools", schoolRoutes);

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
