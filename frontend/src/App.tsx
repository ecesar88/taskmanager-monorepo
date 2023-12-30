import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./config/routes";
import customTheme from "./config/theme";
import { Landing } from "./modules/landing/landing.layout";
import { Home } from "./modules/app/home/home.layout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <Landing />,
    },
    {
      path: ROUTES.APPLICATION_HOME,
      element: <Home />,
    },
  ]);

  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
