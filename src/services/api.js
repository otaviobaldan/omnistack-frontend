import axios from "axios";

const api = axios.create({
  baseURL: "https://otavio-omnistack.herokuapp.com"
});

export default api;
