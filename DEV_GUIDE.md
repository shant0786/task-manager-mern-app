### **1. Initialize the Project**

1. Create a new directory for your project:

   ```bash
   mkdir my-express-app
   cd my-express-app
   ```

2. Initialize a `package.json` file:
   ```bash
   npm init -y
   ```

---

### **2. Install Dependencies**

Install Express.js and other essential packages:

```bash
npm install express
```

For a complete app, you might also need:

Here’s a short description of each package:

1. **cookie-parser**: Parses cookies from HTTP requests, making them accessible via `req.cookies`.

2. **body-parser**: Parses incoming request bodies in middleware (JSON, URL-encoded, etc.).

3. **cors**: Enables Cross-Origin Resource Sharing, allowing secure communication between domains.

4. **express**: A minimal and flexible Node.js web application framework.

5. **express-fileupload/multer**: Middleware for handling file uploads in Express apps (`multer` supports advanced configurations).

6. **express-rate-limit**: Limits repeated requests to APIs to prevent abuse.

7. **express-mongo-sanitize**: Sanitizes MongoDB queries to prevent injection attacks.

8. **helmet**: Adds security headers to protect the app from common web vulnerabilities.

9. **hpp**: Protects against HTTP parameter pollution attacks.

10. **jsonwebtoken**: Implements JSON Web Tokens (JWT) for secure authentication.

11. **xss-clean**: Prevents cross-site scripting (XSS) attacks by sanitizing user inputs.

12. **mongoose**: An ODM (Object Data Modeling) library for MongoDB.

13. **nodemailer**: Sends emails from Node.js applications.

14. **nodemon**: Monitors and automatically restarts the server during development.

15. **dotenv**: Loads environment variables from a `.env` file into `process.env`.

Install them:

```bash
npm install cookie-parser body-parser cors express express-fileupload/multer express-rate-limit express-mongo-sanitize helmet hpp jsonwebtoken xss-clean mongoose nodemailer nodemon dotenv
```

---

### **4. Set Up the File Structure**

Create a directory structure like this:

```
/my-express-app
├── /src
│   ├── /config         # Configuration files (e.g., database, environment variables)
│   ├── /controllers    # Business logic for API endpoints
│   ├── /middlewares    # Custom middleware functions
│   ├── /models         # Database schemas and models
│   ├── /services       # Auxiliary services (e.g., email, payment)
│   ├── /routes         # API route definitions
│   └── /utils          # Helper functions
├── app.js              # Main app logic
├── .env                # Environment variables
├── .server.js          # Start express server
└── package.json        # Project dependencies and scripts
```

---

### **5. Create the Main App File**

In `/src/app.js`, initialize the Express app:

```javascript
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", require("./routes/index"));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
```

---

### **6. Configure Environment Variables**

Create a `.env` file in the root of your project:

```
PORT=3000
DB_URI=mongodb://localhost:27017/mydatabase
SECRET_KEY=your_secret_key
```

Load these variables using `dotenv` in `app.js`.

---

### **7. Set Up Database Configuration**

In `/src/config/db.js`, configure MongoDB (or your database of choice):

```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

Call `connectDB()` in your `app.js` file before starting the server.

---

### **8. Define Routes**

Create a route file, e.g., `/src/routes/index.js`:

```javascript
const express = require("express");
const router = express.Router();

const exampleController = require("../controllers/exampleController");

router.get("/example", exampleController.getExample);

module.exports = router;
```

---

### **9. Implement Controllers**

In `/src/controllers/exampleController.js`:

```javascript
exports.getExample = (req, res) => {
  res.status(200).json({ message: "Example route working!" });
};
```

---

### **10. Add Middleware**

Create custom middleware in `/src/middlewares/logger.js`:

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger;
```

Use it in `app.js`:

```javascript
const logger = require("./middlewares/logger");
app.use(logger);
```

---

### **11. Start the Application**

Run your app:

```bash
node src/app.js
```

Or use a development tool like [nodemon](https://www.npmjs.com/package/nodemon):

```bash
npm install -g nodemon
nodemon src/app.js
```

---

### **12. Test Your Application**

- Open your browser or Postman and visit `http://localhost:3000/api/example`.
- You should see a JSON response: `{ "message": "Example route working!" }`.

---

### **13. Extend the Application**

Now that the skeleton is ready, you can add:

- **Authentication**: Use `jsonwebtoken` for authentication and secure your routes.
- **Database Models**: Add schemas using Mongoose in `/models`.
- **Services**: Create utility functions or third-party API integrations in `/services`.
- **Error Handling**: Add centralized error handling middleware.

---

By following these steps, you will have a robust and extensible Express.js app ready for production.
