import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero/HeroContent";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
