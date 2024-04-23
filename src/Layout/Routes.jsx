import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/auth/login";
import Appointment from "../pages/Appointment/Appointment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/appointment",
                element: <Appointment />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
]);

export default router;