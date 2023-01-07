import express, { json } from "express";
import { router } from "./routes";

const application = express();

application.use(express.json());

application.use(router);

application.listen(3333);
