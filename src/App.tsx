import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Community from "./components/Community";
import Networking from "./components/Networking";
import Sponsors from "./pages/Sponsors";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <EventDetails />
      </>
    ),
  },
  {
    path: "/event-details",
    element: (
      <>
        <Hero />
        <EventDetails />
      </>
    ),
  },
  {
    path: "/community",
    element: (
      <>
        <Hero />
        <Community />
      </>
    ),
  },
  {
    path: "/networking",
    element: (
      <>
        <Hero />
        <Networking />
      </>
    ),
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
