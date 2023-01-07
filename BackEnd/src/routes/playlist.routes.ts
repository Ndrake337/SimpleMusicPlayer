import { Router } from "express";

export const playListRouter = Router();

playListRouter.get("/", (request, response) => {
  response.send("hello World");
});
