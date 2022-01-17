// IMPORTS ////////////////////////
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
const PORT = process.env.PORT || 5000;
// db and authenticate user
import connectDB from "./db/connect.js";
// routers import
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
// middleware import
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// MIDDLEWARE ////////////////////////
if (process.env.NODE_ENV !== "prodcution") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome!" });
});
//
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

// ROUTES ////////////////////////
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// DB CONNECTION ////////////////////////
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
