import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero";
import Sponsors from "./pages/Sponsors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
