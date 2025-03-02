"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatesBetween = getDatesBetween;
function getDatesBetween(startDate, endDate) {
    const dates = [];
    const current = new Date(startDate);
    while (current < endDate) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }
    return dates;
}
//# sourceMappingURL=dateUtils.js.map