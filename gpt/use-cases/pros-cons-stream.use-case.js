"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prosConsDicusserStreamUseCase = void 0;
const prosConsDicusserStreamUseCase = async (openai, { prompt }) => {
    return await openai.chat.completions.create({
        stream: true,
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: `
          Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
          la respuesta debe de ser en formato markdown,
          los pros y contras deben de estar en una lista,
        `
            },
            {
                role: 'user',
                content: prompt
            }
        ],
        temperature: 0.8,
        max_tokens: 500
    });
};
exports.prosConsDicusserStreamUseCase = prosConsDicusserStreamUseCase;
//# sourceMappingURL=pros-cons-stream.use-case.js.map