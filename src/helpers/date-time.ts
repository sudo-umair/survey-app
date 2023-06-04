import { dateFormatter, timeFormatter } from '@utils/formatters';

export function getTodaysDateTime() {
  const date = new Date().toISOString();
  return `${dateFormatter(date)}-${timeFormatter(date)}`;
}
