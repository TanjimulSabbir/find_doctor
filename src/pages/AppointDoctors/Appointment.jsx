import DoctorFilter from "./DoctorFilter";
import "../../style/Appointment.css"
import Catagories from "./Catagories";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInputText } from "../../Redux/Features/filterSlice";



export default function AppointLayout() {
  const dispatch = useDispatch();

  const handleDoctorSearch = () => {
    dispatch(setInputText(""))
  }

  return (
    <div>
      <DoctorFilter handleDoctorSearch={handleDoctorSearch} />
      <Catagories />
      <Outlet />
    </div>
  )
}
