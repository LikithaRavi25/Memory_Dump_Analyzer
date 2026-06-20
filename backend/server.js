require("dotenv").config();
const cors = require("cors");
const historyRoutes =
require("./routes/historyRoutes");

const express = require("express");
const connectDB =
require("./config/db");
const analysisRoutes = require("./routes/analysisRoutes");

const app = express();
connectDB();
app.use(cors());


const systemRoutes =
require("./routes/systemRoutes");



const cmdlineRoutes =
require("./routes/cmdlineRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", systemRoutes);
app.use("/api", cmdlineRoutes);
app.use(
    "/api",
    historyRoutes
);
const hiddenRoutes =
require("./routes/hiddenProcessRoutes");

const uploadRoutes =
require("./routes/uploadRoutes");

app.use(
    "/api/upload",
    uploadRoutes
);

app.use("/api", hiddenRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Memory Dump Analyzer API Running"
  });
});

app.use("/api", analysisRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});