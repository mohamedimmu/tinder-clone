import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-h634.onrender.com"
});

export default instance;