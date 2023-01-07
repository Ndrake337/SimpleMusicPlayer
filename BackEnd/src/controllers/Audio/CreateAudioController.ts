import { AudioRepository } from "../../entities/Audio/repositories/AudioRepositories";
import { CreateAudioHandler } from "../../handlers/Audio/CreateAudioHandler";
import { CreateAudioUseCase } from "../../useCases/Audio/CreateAudioUseCase";

const audioRepository = AudioRepository.getImplements();

const createAudioUseCase = new CreateAudioUseCase(audioRepository);

export const creteAudioController = new CreateAudioHandler(createAudioUseCase);
