import en from "../public/lang/en.json";

declare module "*.svg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.gif";
declare module "*.css";
declare module "*.webp";

type Messages = typeof en;

declare global {
  /* eslint-disable-next-line */
  interface IntlMessages extends Messages {}
}
