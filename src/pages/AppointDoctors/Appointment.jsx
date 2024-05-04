import DoctorFilter from "./DoctorFilter";
import "../../style/Appointment.css"
import Catagories from "./Catagories";
import Doctors from "./Doctors";
import { useState } from "react";
import { Outlet } from "react-router-dom";



export default function AppointLayout() {
  const [category, setCategory] = useState("");
  const [searchedText, setSearchedText] = useState({ category: "", location: "", inputText: "", data: [] });

  const handleDoctorSearch = () => {
    setSearchedText(prev => ({ ...prev, inputText: "" }))
  }

  return (
    <div>
      <DoctorFilter searchedText={searchedText} setSearchedText={setSearchedText} handleDoctorSearch={handleDoctorSearch} />
      <Catagories setCategory={setCategory} category={category} />
      <Doctors searchedText={searchedText} category={category} setCategory={setCategory} />
      <Outlet />
    </div>
  )
}
