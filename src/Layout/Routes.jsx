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
import SetLoginData from "../utils/SetLoginData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <SetLoginData><App /></SetLoginData>
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
                element: <SetLoginData><DocBoard /></SetLoginData>
            },
            {
                path: "/appointment",
                element: <SetLoginData><PrivateRoute> <Appointment /> </PrivateRoute></SetLoginData>,
                children: [
                    {
                        path: "/appointment",
                        element: <SetLoginData><Doctors /></SetLoginData>
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