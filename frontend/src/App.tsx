import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import customTheme from "./config/theme";
import { Home } from "./modules/home/home.layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./config/routes";

export default function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.APPLICATION_HOME,
      element: <>hello world</>,
    },
  ]);

  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
