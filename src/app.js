import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes";

import globalErrorHandler from "./controllers/errorController";

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.ENV === "dev") app.use(morgan("dev"));

app.use(`/api/${process.env.API_VERSION}`, authRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
