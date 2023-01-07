import { Request, Response } from "express";

import { ListAudioUseCase } from "../../useCases/Audio/ListAudioUseCase";

export class ListAudioHandler {
  constructor(private listAudiosUseCase: ListAudioUseCase) {}

  handle(request: Request, response: Response) {
    const audioList = this.listAudiosUseCase.execute();

    return response.json(audioList).send();
  }
}
