import { Request, Response } from "express";
import { CreateAudioUseCase } from "../../useCases/Audio/CreateAudioUseCase";

export class CreateAudioHandler {
  constructor(private createAudiosUseCase: CreateAudioUseCase) {}

  handle(request: Request, response: Response) {
    const { Name, Author, Path } = request.body;
    this.createAudiosUseCase.execute({ Name, Author, Path });

    return response.status(201).send();
  }
}
