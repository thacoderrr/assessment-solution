import { create } from "zustand";
import { instance } from "../utils/request";

const initialState = {
  isLoggedIn: false,
  token: "",
  details: null,
  role: "",
};

const transactionSlice = create((set) => ({
  ...initialState,
  getAllTransaction: async () => {
    try {
      const response = await instance.get("transaction");
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  },
}));

export default transactionSlice;
