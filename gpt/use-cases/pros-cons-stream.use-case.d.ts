import OpenAI from 'openai';
interface Options {
    prompt: string;
}
export declare const prosConsDicusserStreamUseCase: (openai: OpenAI, { prompt }: Options) => Promise<import("openai/streaming").Stream<OpenAI.Chat.Completions.ChatCompletionChunk>>;
export {};
