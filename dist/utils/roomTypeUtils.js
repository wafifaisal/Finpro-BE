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
exports.updateRoomTypeAvgRating = updateRoomTypeAvgRating;
const prisma_1 = __importDefault(require("../prisma"));
function updateRoomTypeAvgRating(roomTypeId) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ambil semua review yang tidak dihapus untuk room type tertentu
        const reviews = yield prisma_1.default.review.findMany({
            where: {
                room_types_id: roomTypeId,
                deleted_at: null,
            },
            select: {
                rating: true,
            },
        });
        // Hitung total rating dan rata-rata
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        const avg_rating = reviews.length > 0 ? totalRating / reviews.length : 0;
        // Perbarui field avg_rating pada RoomTypes
        yield prisma_1.default.roomTypes.update({
            where: { id: roomTypeId },
            data: { avg_rating },
        });
        return avg_rating;
    });
}
//# sourceMappingURL=roomTypeUtils.js.map