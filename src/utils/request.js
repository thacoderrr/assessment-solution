import axios from "axios";
import userSlice from "../store/userStore";

const axiosConfig = {
  baseURL: "http://localhost:3000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const instance = axios.create(axiosConfig);

export const uploadinstance = axios.create({
  ...axiosConfig,
  headers: {
    ...axiosConfig.headers,
    "Contnent-Type": "multipart/form-data",
  },
});

const attachAuthToken = (config) => {
  const token = userSlice.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

instance.interceptors.request.use(attachAuthToken);

uploadinstance.interceptors.request.use(attachAuthToken);
