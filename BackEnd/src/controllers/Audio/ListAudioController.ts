import { AudioRepository } from "../../entities/Audio/repositories/AudioRepositories";
import { ListAudioHandler } from "../../handlers/Audio/ListAudioHandler";
import { ListAudioUseCase } from "../../useCases/Audio/ListAudioUseCase";

const audioRepository = AudioRepository.getImplements();

const listAudioUseCase = new ListAudioUseCase(audioRepository);

export const listAudioController = new ListAudioHandler(listAudioUseCase);
