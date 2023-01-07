import { AudioRepository } from "../../entities/Audio/repositories/AudioRepositories";
import { IRequest } from "./interfaces/expectedFormats";

export class ListAudioUseCase {
  constructor(private audioRepository: AudioRepository) {}

  execute({ Name, Author, Path }: IRequest) {
    const authorAudio = this.audioRepository.findByAuthor(Author);
    const nameAudio = this.audioRepository.findByName(Name);
    if (nameAudio === authorAudio) {
      throw new Error("Sound Already Exists");
    }
    this.audioRepository.create({ Name, Author, Path });
  }
}
