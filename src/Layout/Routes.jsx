import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/auth/Login";
import Appointment from "../pages/AppointDoctors/Appointment";
import DetailsLayout from "../pages/AppointDetails/DetailsLayout";
import Doctors from "../pages/AppointDoctors/Doctors";
import PrivateRoute from "../components/auth/PrivateRoute";
import DoctorLogin from "../components/auth/DoctorLogin";
import DocBoard from "../pages/Doc_Dashbaord/DocBoard";

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
                path: "/doclogin",
                element: <DoctorLogin />
            },
            {
                path: "/docBoard",
                element: <DocBoard />
            },
            {
                path: "/appointment",
                element: <Appointment />,
                children: [
                    {
                        path: "/appointment",
                        element: <Doctors />
                    },
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