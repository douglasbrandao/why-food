import axios from "axios";

const api = axios.create({
  baseURL: "https://api-teste-frontend.luan-nuvem.now.sh/"
});

export default api;
