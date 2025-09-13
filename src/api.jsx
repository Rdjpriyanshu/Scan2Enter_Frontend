import axios from "axios";

const api = axios.create({
  baseURL: "https://scan2enter-backend.onrender.com/api", // your backend
});

export default api;
