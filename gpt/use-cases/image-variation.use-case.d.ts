import OpenAI from 'openai';
interface Options {
    baseImage: string;
}
export declare const imageVariationUseCase: (openai: OpenAI, options: Options) => Promise<{
    url: string;
    openAIUrl: string;
    revised_prompt: string;
}>;
export {};
