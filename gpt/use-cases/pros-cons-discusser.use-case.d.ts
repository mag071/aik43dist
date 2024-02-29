import OpenAI from 'openai';
interface Options {
    prompt: string;
}
export declare const prosConsDicusserUseCase: (openai: OpenAI, { prompt }: Options) => Promise<OpenAI.Chat.Completions.ChatCompletionMessage>;
export {};
