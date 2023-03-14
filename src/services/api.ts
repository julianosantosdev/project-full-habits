import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://full-habbits-m3-grup3.onrender.com",
  timeout: 10000,
});

export { api };
