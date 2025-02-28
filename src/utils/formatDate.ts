import { format } from "date-fns";

export const formatDateDay = (date: string | Date): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date provided.");
  }

  return format(dateObj, "dd MMMM yyyy");
};
