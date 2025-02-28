"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUserFilter = buildUserFilter;
exports.getPagination = getPagination;
function buildUserFilter(query) {
    const filter = {};
    const search = query.search;
    if (search) {
        filter.OR = [
            { username: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
        ];
    }
    return filter;
}
function getPagination(query) {
    const page = parseInt(query.page) || 1;
    const limit = 10;
    const skip = limit * (page - 1);
    return { page, limit, skip };
}
//# sourceMappingURL=userQueryUtils.js.map