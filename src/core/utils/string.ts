export const capitalize = (s: string): string => {
  let str = s;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
