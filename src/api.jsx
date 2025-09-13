import axios from "axios";

const api = axios.create({
  baseURL: "https://scan2enter-backend.onrender.com/", // your backend
});

export default api;
