import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../components/ErrorPage";
import Homepage from "../pages/_index";
import About from "../pages/About";
 export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: "/", element: <Homepage/>},
            {path: "/about", element: <About/> }
        ]
    }
 ])