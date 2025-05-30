import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import clinicRoutes from "./api/routes/clinicRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/clinics", clinicRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Connect to MongoDB and start server
mongoose
  .connect("mongodb://localhost:27017/leada360", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
