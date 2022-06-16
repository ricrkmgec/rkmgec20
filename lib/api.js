import axios from "axios";

const api = axios.create({
  baseURL: "https://rkmgec.vercel.app/api",
});

export default api;