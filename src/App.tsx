import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
  { path: "/dashboard", element: <Dashboard /> }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
