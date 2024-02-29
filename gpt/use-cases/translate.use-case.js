"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateUseCase = void 0;
const translateUseCase = async (openai, { prompt, lang }) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: `Traduce el siguiente texto al idioma ${lang}:${prompt}`
            },
        ],
        temperature: 0.2,
    });
    return { message: response.choices[0].message.content };
};
exports.translateUseCase = translateUseCase;
//# sourceMappingURL=translate.use-case.js.map