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
import restaurantsRouter from "./routes/restaurants.js";
app.use("/restaurants", restaurantsRouter)

//Middleware
import { errorHandler } from "./middleware/errorHandler.js";
app.use(errorHandler);


app.get("*", (req, res) => {
  res.json({ ok: true });
});

// Start API server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`\n Server is running on http://localhost:${PORT}\n`);
});
