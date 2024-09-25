import React, { useRef, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);
  return <RouterProvider router={router} />;
};

export default App;
