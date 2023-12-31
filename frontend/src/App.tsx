import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./config/routes";
import customTheme from "./config/theme";
import { AppRootWrapper } from "./modules/app/AppRootWrapper/AppRootWrapper.layout";
import { Landing } from "./modules/landing/landing.layout";
import { Calendar } from "./modules/app/calendar";

export default function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.LANDING_PAGE,
      element: <Landing />,
    },
    {
      path: ROUTES.HOME,
      element: <AppRootWrapper />,
      children: [
        {
          path: ROUTES.CALENDAR,
          element: <Calendar />,
        },
      ],
    },
  ]);

  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
