import { Audio } from "../Audio";
import { IAudioDTO, IAudioRepository } from "./interfaces/IAudioRepository";

export class AudioRepository implements IAudioRepository {
  private audioRepo: Audio[];

  public static IMPLEMENTS: AudioRepository;

  private constructor() {
    this.audioRepo = [];
  }

  public static getImplements() {
    if (!AudioRepository.IMPLEMENTS) {
      AudioRepository.IMPLEMENTS = new AudioRepository();
    }
    return AudioRepository.IMPLEMENTS;
  }

  list(): Audio[] {
    return this.audioRepo;
  }
  create({ Name, Author, Path }: IAudioDTO): void {
    const uploadedAudio = new Audio();
    Object.assign(uploadedAudio, { Name, Author, Path });
    this.audioRepo.push(uploadedAudio);
  }
  findByName(name: string): Audio {
    const audio = this.audioRepo.find((song) => song.Name === name);
    return audio;
  }
  createMany(audioArray: IAudioDTO[]): void {
    audioArray.forEach((element) => {
      this.create(element);
    });
  }
  findByAuthor(author: string): Audio {
    const audio = this.audioRepo.find((song) => song.Author === author);
    return audio;
  }
}
