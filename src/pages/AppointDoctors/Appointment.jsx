import DoctorFilter from "./DoctorFilter";
import "../../style/Appointment.css"
import Catagories from "./Catagories";
import Doctors from "./Doctors";
import { useState } from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";



export default function AppointLayout() {
  const [category, setCategory] = useState("");
  const [searchedText, setSearchedText] = useState({ category: "", location: "", inputText: "", data: [] });
  const [findDoctors, setFindDoctors] = useState([]);

  const handleDoctorSearch = () => {
    toast.success("successfully data showed")
    setFindDoctors(searchedText.data)
    setSearchedText(prev => ({ ...prev, inputText: "" }))
  }

  useState(() => {
    handleDoctorSearch()
  }, [searchedText.inputText])

  return (
    <div>
      <DoctorFilter setFindDoctors={setFindDoctors} searchedText={searchedText} setSearchedText={setSearchedText} handleDoctorSearch={handleDoctorSearch} />
      <Catagories setCategory={setCategory} category={category} />
      <Doctors searchedText={searchedText} findDoctors={findDoctors} category={category} setCategory={setCategory} />
      <Outlet />
    </div>
  )
}
