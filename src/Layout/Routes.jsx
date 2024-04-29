import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/auth/login";
import Appointment from "../pages/AppointDoctors/Appointment";
import DetailsLayout from "../pages/AppointDetails/DetailsLayout";

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
                path: "/login",
                element: <Login />
            },
            {
                path: "/appointment",
                element: <Appointment />,
                children: [
                    {
                        path: "/appointment/:docId",
                        element: <DetailsLayout />
                    }
                ]
            }
        ]
    }
]);

export default router;