export enum COLORS {
  PRIMARY = "primary",
  PRIMARY_CONTENT = "primary-content",
  SECONDARY = "secondary",
  SECONDARY_CONTENT = "secondary-content",
  ACCENT = "accent",
  ACCENT_CONTENT = "accent-content",
  NEUTRAL = "neutral",
  NEUTRAL_CONTENT = "neutral-content",
  BASE_100 = "base-100",
  BASE_200 = "base-200",
  BASE_300 = "base-300",
  BASE_CONTENT = "base-content",
  INFO = "info",
  INFO_CONTENT = "info-content",
  SUCCESS = "success",
  SUCCESS_CONTENT = "success-content",
  WARNING = "warning",
  WARNING_CONTENT = "warning-content",
  ERROR = "error",
  ERROR_CONTENT = "error-content",
}

export const ColorsMap = Object.values(COLORS);

const constants: {
  apiUrl: string;
  theme: "dark";
} = {
  apiUrl: import.meta.env.VITE_API_URL,
  theme: "dark",
};

export default constants;
