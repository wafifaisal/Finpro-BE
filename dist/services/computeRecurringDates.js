"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRecurringDates = computeRecurringDates;
const date_holidays_1 = __importDefault(require("date-holidays"));
const date_fns_1 = require("date-fns");
const hd = new date_holidays_1.default("ID");
function computeRecurringDates(startDateStr, endDateStr, applyWeekend, applyHoliday) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const allDates = (0, date_fns_1.eachDayOfInterval)({ start: startDate, end: endDate });
    return allDates
        .filter((date) => {
        const weekend = (0, date_fns_1.isWeekend)(date);
        const holiday = hd.isHoliday(date) ? true : false;
        if (applyWeekend && applyHoliday)
            return weekend || holiday;
        if (applyWeekend)
            return weekend;
        if (applyHoliday)
            return holiday;
        return false;
    })
        .map((date) => (0, date_fns_1.format)(date, "yyyy-MM-dd"));
}
