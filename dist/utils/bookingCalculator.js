"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCosts = calculateCosts;
function calculateCosts(booking) {
    const checkInDate = new Date(booking.start_date);
    const checkOutDate = new Date(booking.end_date);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
    const quantity = booking.quantity || 1;
    let seasonalNights = 0;
    let regularNights = 0;
    let seasonalCost = 0;
    let regularCost = 0;
    for (let i = 0; i < nights; i++) {
        const currentDate = new Date(checkInDate);
        currentDate.setDate(currentDate.getDate() + i);
        let priceForNight = booking.room_types.price;
        let isSeasonal = false;
        if (booking.room_types.seasonal_prices &&
            booking.room_types.seasonal_prices.length > 0) {
            const seasonal = booking.room_types.seasonal_prices.find((sp) => {
                if (sp.dates && sp.dates.length > 0) {
                    const target = currentDate.toISOString().split("T")[0];
                    return sp.dates.some((d) => {
                        const dStr = new Date(d).toISOString().split("T")[0];
                        return dStr === target;
                    });
                }
                else if (sp.start_date && sp.end_date) {
                    const spStart = new Date(sp.start_date);
                    const spEnd = new Date(sp.end_date);
                    return currentDate >= spStart && currentDate <= spEnd;
                }
                return false;
            });
            if (seasonal) {
                priceForNight = Number(seasonal.price);
                isSeasonal = true;
            }
        }
        if (isSeasonal) {
            seasonalNights++;
            seasonalCost += priceForNight * quantity;
        }
        else {
            regularNights++;
            regularCost += priceForNight * quantity;
        }
    }
    const roomCost = seasonalCost + regularCost;
    const breakfastCost = booking.room_types.has_breakfast && booking.add_breakfast
        ? booking.room_types.breakfast_price * quantity * nights
        : 0;
    const computedTotal = roomCost + breakfastCost;
    return Object.assign(Object.assign({}, booking), { total_price: computedTotal, breakfastCost,
        computedTotal, seasonalBreakdown: {
            totalNights: nights,
            seasonalNights,
            regularNights,
            seasonalCost,
            regularCost,
        } });
}
//# sourceMappingURL=bookingCalculator.js.map