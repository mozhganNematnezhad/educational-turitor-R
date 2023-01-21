import axios from "axios";

const SERVER_URL = "http://localhost:5000/api";

export const API = axios.create({
  baseURL: SERVER_URL,
});



API.interceptors.request.use((request) => {
  const token = localStorage.getItem("user-token");
  request.headers["x-auth-token"] = token;
  return request;
  // console.log("test");
});
















 
