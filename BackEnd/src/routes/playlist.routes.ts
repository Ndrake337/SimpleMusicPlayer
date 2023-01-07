import { Router } from "express";
import { creteAudioController } from "../controllers/Audio/CreateAudioController";
import { listAudioController } from "../controllers/Audio/ListAudioController";
import { creteManyAudiosController } from "../controllers/Audio/CreateManyAudiosController";

export const playListRouter = Router();

playListRouter.get("/", (request, response) => {
  return listAudioController.handle(request, response);
});

playListRouter.post("/", (request, response) => {
  return creteAudioController.handle(request, response);
});

playListRouter.post("/many", (request, response) => {
  return creteManyAudiosController.handle(request, response);
});