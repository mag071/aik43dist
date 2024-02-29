"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageGenerationUseCase = void 0;
const fs = require("fs");
const helpers_1 = require("../../helpers");
const imageGenerationUseCase = async (openai, options) => {
    const { prompt, originalImage, maskImage } = options;
    if (!originalImage || !maskImage) {
        const response = await openai.images.generate({
            prompt: prompt,
            model: 'dall-e-3',
            n: 1,
            size: '1024x1024',
            quality: 'standard',
            response_format: 'url',
        });
        const fileName = await (0, helpers_1.downloadImageAsPng)(response.data[0].url);
        const url = `${process.env.SERVER_URL}/gpt/image-generation/${fileName}`;
        return {
            url: url,
            openAIUrl: response.data[0].url,
            revised_prompt: response.data[0].revised_prompt,
        };
    }
    const pngImagePath = await (0, helpers_1.downloadImageAsPng)(originalImage, true);
    const maskPath = await (0, helpers_1.downloadBase64ImageAsPng)(maskImage, true);
    const response = await openai.images.edit({
        model: 'dall-e-2',
        prompt: prompt,
        image: fs.createReadStream(pngImagePath),
        mask: fs.createReadStream(maskPath),
        n: 1,
        size: '1024x1024',
        response_format: 'url',
    });
    const fileName = await (0, helpers_1.downloadImageAsPng)(response.data[0].url);
    const url = `${process.env.SERVER_URL}/gpt/image-generation/${fileName}`;
    return {
        url: url,
        openAIUrl: response.data[0].url,
        revised_prompt: response.data[0].revised_prompt,
    };
};
exports.imageGenerationUseCase = imageGenerationUseCase;
//# sourceMappingURL=image-generation.use-case.js.map