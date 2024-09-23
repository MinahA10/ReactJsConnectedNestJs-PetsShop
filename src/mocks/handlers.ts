import API_PATHS from "../config/api";
import { http } from "msw";

export const handlers = [
  http.get(API_PATHS.PRODUCTS, () => {
    console.log('Captured a "GET /posts" request');
  }),
];
