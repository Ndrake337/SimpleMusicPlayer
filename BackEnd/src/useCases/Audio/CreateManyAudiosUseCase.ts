import { AudioRepository } from "../../entities/Audio/repositories/AudioRepositories";
import { IAudioDTO } from "../../entities/Audio/repositories/interfaces/IAudioRepository";
import { IRequest } from "./interfaces/expectedFormats";

export class CreateManyUseCase {
  constructor(private audioRepository: AudioRepository) {}

  execute(audioArray: IAudioDTO[]) {
    this.audioRepository.createMany(audioArray);
  }
}
