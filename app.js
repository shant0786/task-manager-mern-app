import express, { urlencoded } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import xss from "xss-clean";
import mongoose from "mongoose";
import router from "../task-manager-api/routes/api.js";

import {
  MONGODB_CONNECTION,
  MAX_JSON_SIZE,
  URL_ENCODED,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
  WEB_CACHE,
  PORT,
} from "./app/config/config.js";

const app = express();

// App use middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(urlencoded({ extended: URL_ENCODED }));
app.use(helmet());
app.use(hpp());

// App use limiter
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);
app.set("etag", WEB_CACHE);
app.use(xss());
// Connect to MongoDB
mongoose
  .connect(MONGODB_CONNECTION, {
    autoIndex: true,
  })
  .then(() => console.log("Connection Successfully established"))
  .catch(() => console.log("Connection Failure"));

app.use("/api/v1", router);
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    data: "Data not found try again with correct api route",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
