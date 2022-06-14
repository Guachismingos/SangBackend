import { config as dotenv } from "dotenv";

dotenv();

const config = {
  host: process.env.HOST_ADDRESS,
  mail: process.env.USER_MAIL,
  password: process.env.USER_PASSWORD,
};