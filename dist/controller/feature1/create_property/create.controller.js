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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
const prisma_1 = __importDefault(require("../../../prisma")); // Pastikan path sesuai dengan project Anda
const cloudinary_1 = require("../../../services/cloudinary");
class CreateController {
    CreateProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.files ||
                    !(req.files instanceof Array) ||
                    req.files.length === 0) {
                    throw { message: "Images don't exist" };
                }
                let location = req.body.location;
                if (typeof location === "string") {
                    location = JSON.parse(location);
                }
                const imageUploads = yield Promise.all(req.files.map((file) => __awaiter(this, void 0, void 0, function* () {
                    return (0, cloudinary_1.cloudinaryUpload)(file, "property");
                })));
                const imagesData = imageUploads.map(({ secure_url }) => ({
                    image_url: secure_url,
                }));
                const { name, desc, category, terms_condition } = req.body;
                let locationData;
                if (typeof location === "string" && !isNaN(Number(location))) {
                    // Jika location berupa ID, hubungkan dengan lokasi yang ada
                    locationData = { connect: { id: Number(location) } };
                }
                else if (typeof location === "object" && location.address) {
                    // Jika lokasi adalah object baru, buat entri baru
                    const { address, country, city, longitude, latitude } = location;
                    locationData = {
                        create: {
                            address,
                            country,
                            city,
                            longitude: Number(longitude),
                            latitude: Number(latitude),
                        },
                    };
                }
                else {
                    throw { message: "Invalid location data" };
                }
                if (!location.address || !location.country || !location.city) {
                    throw { message: "Missing required location fields" };
                }
                const property = yield prisma_1.default.property.create({
                    data: {
                        name,
                        desc,
                        category,
                        terms_condition,
                        location: locationData,
                        tenant: {
                            connect: { id: (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id },
                        },
                        PropertyImages: {
                            create: imagesData,
                        },
                    },
                });
                res.status(200).send({
                    message: "Property created",
                    property_id: property.id,
                });
            }
            catch (err) {
                console.error("Error creating property:", err);
                res.status(400).send(err);
            }
        });
    }
}
exports.CreateController = CreateController;
