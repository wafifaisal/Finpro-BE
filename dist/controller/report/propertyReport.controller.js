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
exports.PropertyReportController = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const dayjs_1 = __importDefault(require("dayjs"));
class PropertyReportController {
    getPropertyAvailability(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tenantId, startDate, endDate } = req.query;
            if (!tenantId) {
                res.status(400).send({ error: "tenantId is required" });
                return;
            }
            const start = startDate
                ? (0, dayjs_1.default)(startDate)
                : (0, dayjs_1.default)().startOf("day");
            const end = endDate
                ? (0, dayjs_1.default)(endDate)
                : (0, dayjs_1.default)().add(30, "day").endOf("day");
            const dateRange = [];
            let current = start.clone();
            while (current.isBefore(end) || current.isSame(end, "day")) {
                dateRange.push(current.format("YYYY-MM-DD"));
                current = current.add(1, "day");
            }
            const properties = yield prisma_1.default.property.findMany({
                where: { tenantId: tenantId },
                include: {
                    RoomTypes: {
                        select: {
                            stock: true,
                            RoomAvailability: {
                                where: {
                                    date: {
                                        gte: start.toDate(),
                                        lte: end.toDate(),
                                    },
                                },
                            },
                        },
                    },
                },
            });
            const aggregatedMap = {};
            dateRange.forEach((dateKey) => {
                aggregatedMap[dateKey] = {
                    date: dateKey,
                    available: 0,
                    booked: 0,
                    total: 0,
                };
            });
            properties.forEach((property) => {
                property.RoomTypes.forEach((roomType) => {
                    const totalRooms = roomType.stock;
                    dateRange.forEach((dateKey) => {
                        const record = roomType.RoomAvailability.find((r) => (0, dayjs_1.default)(r.date).format("YYYY-MM-DD") === dateKey);
                        let available, booked;
                        if (record) {
                            available = record.availableCount;
                            booked = totalRooms - record.availableCount;
                        }
                        else {
                            available = totalRooms;
                            booked = 0;
                        }
                        aggregatedMap[dateKey].available += available;
                        aggregatedMap[dateKey].booked += booked;
                        aggregatedMap[dateKey].total += totalRooms;
                    });
                });
            });
            const aggregatedData = Object.values(aggregatedMap);
            res.status(200).send(aggregatedData);
        });
    }
}
exports.PropertyReportController = PropertyReportController;
//# sourceMappingURL=propertyReport.controller.js.map