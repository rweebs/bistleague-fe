import axios from "configs/axios";

export default {
  login: (credentials) => axios.post("/login", credentials),
  register: (payload) => axios.post("/users", payload),
  get:(credentials) => axios.get("/users", credentials)
};
