import axios from "axios";

const instance = axios.create({
  baseURL: "https://faster-backend.onrender.com",
});

export default instance;
