import { create } from "zustand";
import { persist } from "zustand/middleware";
import loaderSlice from "./loaderStore";
import { instance } from "../utils/request";

const initialState = {
  isLoggedIn: false,
  token: "",
  details: null,
  role: "",
};

const userSlice = create(
  persist(
    (set) => ({
      ...initialState,
      login: async (data) => {
        try {
          loaderSlice.setState({ loader: true });
          const response = await instance.post("login", data);
          console.log(response.data.token);
          const token = response.data.token;
          set((state) => ({ ...state, token: token }));
          set((state) => ({ ...state, isLoggedIn: true }));
          return response.data;
        } catch (error) {
          return error;
        } finally {
          loaderSlice.setState({ loader: false });
        }
      },
      Signup: async (data) => {
        try {
          loaderSlice.setState({ loader: true });
          const response = await instance.post("signup", data);
          console.log(response);
          return response.data;
        } catch (error) {
          return error;
        } finally {
          loaderSlice.setState({ loader: false });
        }
      },
      logout: async () => {
        try {
          const response = await instance.get("logout");

          console.log(response);
          return response;
        } catch (error) {
          return error;
        } finally {
          set(initialState);
          loaderSlice.setState({ loader: false });
        }
      },
    }),
    {
      name: "fmtaStore",
    }
  )
);

export default userSlice;
