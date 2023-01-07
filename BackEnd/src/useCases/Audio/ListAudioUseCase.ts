import { AudioRepository } from "../../entities/Audio/repositories/AudioRepositories";

export class ListAudioUseCase {
  constructor(private audioRepository: AudioRepository) {}

  execute() {
    return this.audioRepository.list();
  }
}
