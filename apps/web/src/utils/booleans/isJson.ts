export type IsJSON = (str: string) => boolean;

const isJSON: IsJSON = (str) => {
  try {
    JSON.parse(str);
  } catch (error) {
    console.error(error);
    return false;
  }

  return true;
};

export default isJSON;
