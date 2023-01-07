import { Request, Response } from "express";
import { CreateManyUseCase } from "../../useCases/Audio/CreateManyAudiosUseCase";

export class CreateManyAudiosHandler {
  constructor(private createManyAudiosUseCase: CreateManyUseCase) {}

  handle(request: Request, response: Response) {
    const { Audios } = request.body;

    this.createManyAudiosUseCase.execute(Audios);

    return response.status(201).send();
  }
}
