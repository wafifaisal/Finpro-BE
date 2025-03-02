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
exports.fetchTenants = fetchTenants;
const prisma_1 = __importDefault(require("../prisma"));
function fetchTenants(filter, limit, skip) {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield prisma_1.default.tenant.aggregate({ _count: { _all: true } });
        const total_page = Math.ceil(count._count._all / limit);
        const tenants = yield prisma_1.default.tenant.findMany({
            where: filter,
            orderBy: { createdAt: "asc" },
            take: limit,
            skip,
        });
        return { total_page, tenants };
    });
}
//# sourceMappingURL=tenantDataFetcher.js.map