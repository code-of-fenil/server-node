import appRoot from "app-root-path";
import dotenv from "dotenv";

dotenv.config({ path: `${appRoot}/.env` });

export default {
  PORT: process.env.PORT,
};
