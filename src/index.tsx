import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import memberPodtheme from "./memberpodtheme.ts";
import eventpaditheme from "./eventpaditheme.ts";
import { ChakraProvider } from "@chakra-ui/react";

const getCurrentTheme = () => {
  const url = window.location.href;

  if (url.includes("memberpodapp")) {
    return memberPodtheme;
  } else if (url.includes("eventpadi")) {
    return eventpaditheme;
  }
  return memberPodtheme;
  // return eventpaditheme;
};
const currentTheme = getCurrentTheme();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={currentTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
