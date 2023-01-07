import { AudioRepository } from "../../entities/Audio/repositories/AudioRepositories";
import { CreateManyAudiosHandler } from "../../handlers/Audio/CreateManyAudiosHandler";
import { CreateManyUseCase } from "../../useCases/Audio/CreateManyAudiosUseCase";
const audioRepository = AudioRepository.getImplements();

const createManyAudiosUseCase = new CreateManyUseCase(audioRepository);

export const creteManyAudiosController = new CreateManyAudiosHandler(
  createManyAudiosUseCase
);
