"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateDay = void 0;
const date_fns_1 = require("date-fns");
const formatDateDay = (date) => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) {
        throw new Error("Invalid date provided.");
    }
    return (0, date_fns_1.format)(dateObj, "dd MMMM yyyy");
};
exports.formatDateDay = formatDateDay;
//# sourceMappingURL=formatDate.js.map