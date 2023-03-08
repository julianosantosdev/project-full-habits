import axios from "axios";

export const api = axios.create({
  baseURL: "https://full-habbits-m3-grup3.onrender.com",
  timeout: 10000,
});
