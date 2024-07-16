import { parseISO } from "date-fns";
import { format } from "date-fns-jalali";

const formatDatePersian = (isoDateString: string) => {
  const date = parseISO(isoDateString);
  return format(date, "yyyy/MM/dd");
};

export default formatDatePersian;
