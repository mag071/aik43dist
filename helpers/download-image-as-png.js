"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadBase64ImageAsPng = exports.downloadImageAsPng = void 0;
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const common_1 = require("@nestjs/common");
const downloadImageAsPng = async (url, fullPath = false) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new common_1.InternalServerErrorException('Download image was not possible');
    }
    const folderPath = path.resolve('./', './generated/images/');
    fs.mkdirSync(folderPath, { recursive: true });
    const imageNamePng = `${new Date().getTime()}.png`;
    const buffer = Buffer.from(await response.arrayBuffer());
    const completePath = path.join(folderPath, imageNamePng);
    await sharp(buffer).png().ensureAlpha().toFile(completePath);
    return fullPath ? completePath : imageNamePng;
};
exports.downloadImageAsPng = downloadImageAsPng;
const downloadBase64ImageAsPng = async (base64Image, fullPath = false) => {
    base64Image = base64Image.split(';base64,').pop();
    const imageBuffer = Buffer.from(base64Image, 'base64');
    const folderPath = path.resolve('./', './generated/images/');
    fs.mkdirSync(folderPath, { recursive: true });
    const imageNamePng = `${new Date().getTime()}-64.png`;
    const completePath = path.join(folderPath, imageNamePng);
    await sharp(imageBuffer).png().ensureAlpha().toFile(completePath);
    return fullPath ? completePath : imageNamePng;
};
exports.downloadBase64ImageAsPng = downloadBase64ImageAsPng;
//# sourceMappingURL=download-image-as-png.js.map