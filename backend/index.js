// Import express.
import express from "express";
// Import cors.
import cors from "cors";
// Import routes.
import Router from "./routes/routes.js";

// Init express.
const app = express();

// Use express json.
app.use(express.json());

// Use cors.
app.use(cors());

// Use router.
app.use(Router);

app.listen(5000, () => console.log('Server running at http://localhost:5000'));
