import cron from "node-cron";
import { scheduleReminders } from "./services/reminderService";

cron.schedule("0 0 * * *", async () => {
  console.log("Running booking reminder job...");
  await scheduleReminders();
});

console.log("⏳ Cron job initialized.");
