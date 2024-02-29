/// <reference types="multer" />
import type { Response } from 'express';
import { GptService } from './gpt.service';
import { AudioToTextDto, ImageGenerationDto, ImageVariationDto, OrthographyDto, ProsConsDiscusserDto, TextToAudioDto, TranslateDto } from './dtos';
export declare class GptController {
    private readonly gptService;
    constructor(gptService: GptService);
    orthographyCheck(orthographyDto: OrthographyDto): Promise<any>;
    prosConsDicusser(prosConsDiscusserDto: ProsConsDiscusserDto): Promise<import("openai/resources").ChatCompletionMessage>;
    prosConsDicusserStream(prosConsDiscusserDto: ProsConsDiscusserDto, res: Response): Promise<void>;
    translateText(translateDto: TranslateDto): Promise<{
        message: string;
    }>;
    textToAudioGetter(res: Response, fileId: string): Promise<void>;
    textToAudio(textToAudioDto: TextToAudioDto, res: Response): Promise<void>;
    audioToText(file: Express.Multer.File, audioToTextDto: AudioToTextDto): Promise<import("openai/resources/audio/transcriptions").Transcription>;
    imageGeneration(imageGenerationDto: ImageGenerationDto): Promise<{
        url: string;
        openAIUrl: string;
        revised_prompt: string;
    }>;
    getGenerated(res: Response, fileName: string): Promise<void>;
    imageVariation(imageVariationDto: ImageVariationDto): Promise<{
        url: string;
        openAIUrl: string;
        revised_prompt: string;
    }>;
}
