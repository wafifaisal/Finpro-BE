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
exports.CreatePropertyController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const ImageServices_1 = require("../../services/ImageServices");
const ParseUtils_1 = require("../../utils/ParseUtils");
class CreatePropertyController {
    createProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const imgs = yield (0, ImageServices_1.uploadImages)(req.files, "property");
                const loc = (0, ParseUtils_1.parseLocation)(req.body.location);
                const facs = (0, ParseUtils_1.parseFacilities)(req.body.facilities);
                const { name, desc, category, terms_condition } = req.body;
                const property = yield prisma_1.default.property.create({
                    data: {
                        name,
                        desc,
                        category,
                        terms_condition,
                        location: loc,
                        tenant: { connect: { id: (_a = req.tenant) === null || _a === void 0 ? void 0 : _a.id } },
                        PropertyImages: { create: imgs },
                        facilities: facs,
                    },
                });
                res
                    .status(200)
                    .send({ message: "Property created", property_id: property.id });
            }
            catch (err) {
                res.status(400).send(err);
            }
        });
    }
    editProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.property_id);
                if (isNaN(id)) {
                    res.status(400).json({ message: "Invalid property ID" });
                    return;
                }
                const imgs = req.files && Array.isArray(req.files) && req.files.length
                    ? yield (0, ImageServices_1.uploadImages)(req.files, "property")
                    : null;
                const loc = req.body.location
                    ? (0, ParseUtils_1.parseLocationUpdate)(req.body.location)
                    : null;
                const facs = req.body.facilities
                    ? (0, ParseUtils_1.parseFacilities)(req.body.facilities)
                    : null;
                const { name, desc, category, terms_condition } = req.body;
                let data = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (name && { name })), (desc && { desc })), (category && { category })), (terms_condition && { terms_condition })), (facs && { facilities: facs })), (loc && { location: loc }));
                if (imgs) {
                    yield prisma_1.default.propertyImages.deleteMany({ where: { property_id: id } });
                    data.PropertyImages = { create: imgs };
                }
                const upd = yield prisma_1.default.property.update({ where: { id }, data });
                res
                    .status(200)
                    .json({ message: "Property updated successfully", property: upd });
            }
            catch (err) {
                res.status(400).json(err);
            }
        });
    }
    deleteProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.property_id);
                if (isNaN(id)) {
                    res.status(400).json({ message: "Invalid property ID" });
                    return;
                }
                const prop = yield prisma_1.default.property.findUnique({ where: { id } });
                if (!prop) {
                    res.status(404).json({ message: "Property not found" });
                    return;
                }
                const activeBooking = yield prisma_1.default.booking.findFirst({
                    where: {
                        room_types: { property_id: id },
                        status: { notIn: ["canceled", "completed"] },
                    },
                });
                if (activeBooking) {
                    res.status(400).json({
                        message: "Properti tidak dapat dihapus karena ada pemesanan aktif yang terkait dengannya.",
                    });
                    return;
                }
                yield prisma_1.default.roomTypes.updateMany({
                    where: { property_id: id },
                    data: { deletedAt: new Date() },
                });
                yield prisma_1.default.propertyImages.updateMany({
                    where: { property_id: id },
                    data: { deletedAt: new Date() },
                });
                yield prisma_1.default.property.update({
                    where: { id },
                    data: { isAvailable: false },
                });
                res.status(200).json({ message: "Property deleted successfully" });
            }
            catch (err) {
                console.error(err);
                res.status(400).json(err);
            }
        });
    }
}
exports.CreatePropertyController = CreatePropertyController;
//# sourceMappingURL=property.controller.js.map