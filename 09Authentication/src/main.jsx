import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Dashboard from "./components/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);