import express, { urlencoded } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import xss from "xss-clean";
import mongoose from "mongoose";
import router from "./routes/apiRoute";
import {
  MONGODB_CONNECTION,
  JWT_SECRET,
  JWT_EXPIRATION_TIME,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  MAIL_ENCRYPTION,
  MAX_JSON_SIZE,
  URL_ENCODED,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
  WEB_CACHE,
  PORT,
} from "./app/config/config";
import router from "./routes/api";

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

// Connect to MongoDB
mongoose
  .connect(MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection Successfully established"))
  .catch(() => console.log("Connection Failure"));

  