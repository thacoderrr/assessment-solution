// eslint-disable-next-line no-unused-vars
import React from "react";
import './App.css';
import './styles/main.scss'
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
