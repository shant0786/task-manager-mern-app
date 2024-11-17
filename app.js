import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import xss from "xss-clean";
import mongoose from "mongoose";
import router from "./routes/apiRoute";

const app = express();

// App use middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
