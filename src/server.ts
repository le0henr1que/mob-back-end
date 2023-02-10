import * as dotenv from "dotenv";
dotenv.config();
import { app } from "./app";
// import { connectToMongoDb } from "./database/mongo";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./utils/config/swagger.json";
import { Request, Response } from "express";

const PORT = process.env.PORT || 5000;

// const createServer = async () => {
  // await connectToMongoDb();
  app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript don Vercel')
  })
  app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
    console.log(`Documentation at http://localhost:${PORT}/api/docs`);
  });
// };
// createServer();