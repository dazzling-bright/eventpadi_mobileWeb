import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClientProvider
import Hero from "./components/Hero";
import UpdatesMobile from "./pages/updates/UpdatesMobile";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/Signin";
import Sponsors from "./pages/sponsors/Sponsors";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import ResetPassword from "./pages/resetpassword/ResetPassword";

// Create a QueryClient instance
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Hero />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
  {
    path: "/announcements",
    element: <UpdatesMobile />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
