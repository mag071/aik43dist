"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageVariationUseCase = void 0;
const fs = require("fs");
const helpers_1 = require("../../helpers");
const imageVariationUseCase = async (openai, options) => {
    const { baseImage } = options;
    const pngImagePath = await (0, helpers_1.downloadImageAsPng)(baseImage, true);
    const response = await openai.images.createVariation({
        model: 'dall-e-2',
        image: fs.createReadStream(pngImagePath),
        n: 1,
        size: '1024x1024',
        response_format: 'url'
    });
    const fileName = await (0, helpers_1.downloadImageAsPng)(response.data[0].url);
    const url = `${process.env.SERVER_URL}/gpt/image-generation/${fileName}`;
    return {
        url: url,
        openAIUrl: response.data[0].url,
        revised_prompt: response.data[0].revised_prompt,
    };
};
exports.imageVariationUseCase = imageVariationUseCase;
//# sourceMappingURL=image-variation.use-case.js.map