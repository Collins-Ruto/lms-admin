import dotenv from "dotenv";

dotenv.config();

export const graphqlAPI = process.env.GRAPHCMS_API;
export const GRAPHCMS_TOKEN = process.env.GRAPHCMS_TOKEN;
