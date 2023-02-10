import express from "express";
// import { router } from "./routes";

import cors from "cors";
// import { connectToMongoDb } from "./database/mongo";

// connectToMongoDb();

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
// app.use(router);

export { app };