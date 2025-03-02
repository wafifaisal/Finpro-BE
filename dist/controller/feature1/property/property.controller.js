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
exports.PropertyController = void 0;
const prisma_1 = __importDefault(require("../../../prisma"));
class PropertyController {
    getProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Default query parameters
                const limit = parseInt(req.query.limit) || 8;
                const page = parseInt(req.query.page) || 1;
                const sortBy = req.query.sortBy || "name";
                const sortOrder = req.query.sortOrder || "asc";
                const nameFilter = req.query.name;
                const categoryFilter = req.query.category;
                const filter = {};
                if (nameFilter) {
                    filter.name = {
                        contains: nameFilter,
                        mode: "insensitive",
                    };
                }
                if (categoryFilter) {
                    filter.category = {
                        equals: categoryFilter,
                        mode: "insensitive",
                    };
                }
                if (req.query.location) {
                    filter.location = {
                        city: {
                            contains: req.query.location,
                            mode: "insensitive",
                        },
                    };
                }
                const totalProperties = yield prisma_1.default.property.count({
                    where: filter,
                });
                const totalPages = Math.ceil(totalProperties / limit);
                const properties = yield prisma_1.default.property.findMany({
                    where: filter,
                    take: limit,
                    skip: (page - 1) * limit,
                    orderBy: {
                        [sortBy]: sortOrder,
                    },
                    select: {
                        id: true,
                        name: true,
                        desc: true,
                        category: true,
                        terms_condition: true,
                        click_rate: true,
                        location: {
                            select: {
                                address: true,
                                city: true,
                                country: true,
                                latitude: true,
                                longitude: true,
                            },
                        },
                        PropertyImages: {
                            select: {
                                image_url: true,
                            },
                        },
                        RoomTypes: {
                            select: {
                                id: true,
                                name: true,
                                price: true,
                                avg_rating: true,
                                Unavailable: {
                                    // Include the unavailable dates
                                    select: {
                                        start_date: true,
                                        end_date: true,
                                    },
                                },
                            },
                        },
                        tenant: {
                            select: {
                                name: true,
                                email: true,
                            },
                        },
                        isAvailable: true, // Include the availability status
                    },
                });
                // Send response
                res.status(200).send({
                    totalPages,
                    currentPage: page,
                    limit,
                    result: properties,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).send({
                    message: "Error retrieving properties",
                });
            }
        });
    }
}
exports.PropertyController = PropertyController;
