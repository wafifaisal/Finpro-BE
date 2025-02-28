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
exports.fetchTenantProperties = fetchTenantProperties;
const prisma_1 = __importDefault(require("../prisma"));
function fetchTenantProperties(tenantId, skip, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const totalProperties = yield prisma_1.default.property.count({
            where: { tenantId, isAvailable: true },
        });
        const totalPages = Math.ceil(totalProperties / limit);
        const properties = yield prisma_1.default.property.findMany({
            where: { tenantId, isAvailable: true },
            include: {
                PropertyImages: {
                    where: { deletedAt: null },
                },
                RoomTypes: {
                    where: { deletedAt: null },
                    include: {
                        RoomImages: {
                            where: { deletedAt: null },
                        },
                        Review: true,
                        seasonal_prices: true,
                        Unavailable: true,
                    },
                },
                tenant: true,
                location: true,
            },
            skip,
            take: limit,
        });
        return { properties, totalPages, totalProperties };
    });
}
