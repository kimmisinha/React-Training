const predefinedString = "ABCDEFGHIJKLMNORQRSTUVWXYZ";

export const createToken = () => {
  const timestamp = Date.now();
  const randomNum = predefinedString.substring(0, 5);
  return `${timestamp}-${randomNum}`;
};
