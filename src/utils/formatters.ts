export const CnicFormatter = (cnic: string) => {
  if (cnic.length === 13) {
    return `${cnic.slice(0, 5)}-${cnic.slice(5, 12)}-${cnic.slice(12)}`;
  }
  return cnic;
};
