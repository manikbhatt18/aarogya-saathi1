import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  newsApiKey: process.env.NEWSAPI_KEY,
};
