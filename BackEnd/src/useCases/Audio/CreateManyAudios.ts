import { AudioRepository } from "../../entities/Audio/repositories/AudioRepositories";
import { IAudioDTO } from "../../entities/Audio/repositories/interfaces/IAudioRepository";
import { IRequest } from "./interfaces/expectedFormats";

export class ListAudioUseCase {
  constructor(private audioRepository: AudioRepository) {}

  execute(audioArray: IAudioDTO[]) {
    const validAudios = audioArray.map((audio) => {
      const authorAudio = this.audioRepository.findByAuthor(audio.Author);
      const nameAudio = this.audioRepository.findByName(audio.Name);
      if (nameAudio !== authorAudio) {
        return audio;
      }
    });
    this.audioRepository.createMany(validAudios);
  }
}
