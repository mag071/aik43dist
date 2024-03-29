import OpenAI from 'openai';
interface Options {
    prompt: string;
    originalImage?: string;
    maskImage?: string;
}
export declare const imageGenerationUseCase: (openai: OpenAI, options: Options) => Promise<{
    url: string;
    openAIUrl: string;
    revised_prompt: string;
}>;
export {};
