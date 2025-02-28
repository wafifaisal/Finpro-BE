"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImages = uploadImages;
const cloudinary_1 = require("./cloudinary");
function uploadImages(files, folder) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!files || !Array.isArray(files) || files.length === 0)
            throw { message: "Images don't exist" };
        const uploads = yield Promise.all(files.map((file) => (0, cloudinary_1.cloudinaryUpload)(file, folder)));
        return uploads.map((u) => ({ image_url: u.secure_url }));
    });
}
