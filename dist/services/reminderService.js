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
exports.sendBookingReminder = sendBookingReminder;
exports.scheduleReminders = scheduleReminders;
const prisma_1 = __importDefault(require("../prisma"));
const emailService_1 = require("./emailService");
function sendBookingReminder(bookingId) {
    return __awaiter(this, void 0, void 0, function* () {
        const booking = yield prisma_1.default.booking.findUnique({
            where: { id: bookingId },
            include: {
                user: true,
                room_types: {
                    include: {
                        property: true,
                    },
                },
            },
        });
        if (!booking || !booking.user)
            return;
        const emailContent = `
      <!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        background: #ffffff;
        margin: 20px auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      }

      .header {
        background-color: #007bff;
        color: #ffffff;
        text-align: center;
        padding: 15px;
        font-size: 22px;
        font-weight: bold;
        border-radius: 8px 8px 0 0;
      }

      .content {
        padding: 20px;
        font-size: 16px;
        color: #333333;
        line-height: 1.6;
      }

      .content strong {
        color: #007bff;
      }

      .cta-button {
        display: inline-block;
        background-color: #F8636B;
        color: white;
        padding: 12px 20px;
        text-decoration: none;
        border-radius: 5px;
        font-size: 16px;
        margin-top: 15px;
      }

      .cta-button:hover {
        background-color: #D53F3F;
      }

      .footer {
        text-align: center;
        padding: 15px;
        font-size: 14px;
        color: #666666;
        background: #f4f4f4;
        border-radius: 0 0 8px 8px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Booking Reminder</div>
      <div class="content">
        <p>Hello <strong>${booking.user.username}</strong>,</p>
        <p>We’re reminding you that your booking at <strong>${booking.room_types.property.name}</strong> 
        starts on <strong>${booking.start_date.toDateString()}</strong>.</p>
        <p>Please ensure everything is set for your check-in. We’re excited to have you!</p>
        <p>
          <a href="https://nginepin.vercel.app/trips" class="cta-button">View Booking</a>
        </p>
        <br />
        <p>Thank you,</p>
        <p><strong>Nginepin Team</strong></p>
      </div>
      <div class="footer">
        &copy; 2025 Nginepin. All Rights Reserved.
      </div>
    </div>
  </body>
</html>
    `;
        yield (0, emailService_1.sendEmail)(booking.user.email, "Booking Reminder", emailContent);
    });
}
function scheduleReminders() {
    return __awaiter(this, void 0, void 0, function* () {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        const dayAfterTomorrow = new Date(tomorrow);
        dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);
        const bookings = yield prisma_1.default.booking.findMany({
            where: {
                start_date: {
                    gte: tomorrow,
                    lt: dayAfterTomorrow,
                },
                status: "completed",
            },
            select: { id: true },
        });
        for (const booking of bookings) {
            yield sendBookingReminder(booking.id);
        }
    });
}
//# sourceMappingURL=reminderService.js.map