//Load environment variable
import { config } from "dotenv";
config();

// Import express and cors
import express from "express";
import cors from "cors";

// Set up express
const app = express();
app.disable("x-powered-by");
app.use(cors());
// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));

//Add routers below:

app.get("*", (req, res) => {
  res.json({ ok: true });
});

// Start API server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`);
});
