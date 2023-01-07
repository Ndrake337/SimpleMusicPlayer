import express from "express";
import { router } from "./routes";

const application = express();

application.use(router);

application.listen(3333);
