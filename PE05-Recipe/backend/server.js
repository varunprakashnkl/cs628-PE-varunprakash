import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import https from "https";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5003;

// Use HTTPS (Self-Signed Certificate for Local Testing)
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

// Start HTTPS server
https.createServer(options, app).listen(PORT, () => {
  console.log(`🚀 Secure Server running on port ${PORT} (HTTPS)`);
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.get("/api/recipes", (req, res) => {
  res.json({ message: "Recipes API is working!" });
});
