import { v4 as uuidV4 } from "uuid";

export class Audio {
  id?: string;
  Name: string;
  Author: string;
  FilePath: string;
  uploadedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.uploadedAt = new Date();
  }
}
