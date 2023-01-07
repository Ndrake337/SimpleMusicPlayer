import { Audio } from "../../Audio";

interface IAudioDTO {
  Name: string;
  Author: string;
  Path: string;
}

export interface IAudioRepository {
  list(): Audio[];
  create({ Name, Author, Path }: IAudioDTO): void;
  findByName(name: string): Audio;
  findByAuthor(author: string): Audio;
  createMany(audioArray: IAudioDTO[]): void;
}
