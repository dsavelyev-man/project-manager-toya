import { COLORS } from "../constants.ts";

const getIntent = (
  prefix = "",
): {
  [key in COLORS]: any;
} => {
  return Object.values(COLORS).reduce(
    (acum, name) => ({
      ...acum,
      [name]: [`${prefix}${name}`],
    }),
    {},
  ) as {
    [key in COLORS]: any;
  };
};

export default getIntent;
