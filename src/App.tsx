import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Login/> },
  { path: "/dashboard", element: <Dashboard /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
