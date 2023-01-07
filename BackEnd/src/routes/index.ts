import { Router } from "express";
import { playListRouter } from "./playlist.routes";

export const router = Router();

router.use("/playlist", playListRouter);
