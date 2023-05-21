import { MONTHS } from '@common/constants';

export const CnicFormatter = (cnic: string) => {
  if (cnic.length === 13) {
    return `${cnic.slice(0, 5)}-${cnic.slice(5, 12)}-${cnic.slice(12)}`;
  }
  return cnic;
};

export const dateFormatter = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const strDate = `${day}-${MONTHS[month]}-${year}`;
  return strDate;
};

export const timeFormatter = (date: Date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutesStr} ${ampm}`;
  return strTime;
};
