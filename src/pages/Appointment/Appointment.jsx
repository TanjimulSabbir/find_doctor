import DoctorFilter from "./DoctorFilter";
import "../../style/Appointment.css"
import Catagories from "./Catagories";
import Doctors from "./Doctors";
import { useState } from "react";


export default function Appointment() {
  const [category, setCategory] = useState("");
  const [searchedText, setSearchedText] = useState({ category: "", location: "", inputText: "", data: [] });
  const [findDoctors, setFindDoctors] = useState([]);

  const handleDoctorSearch = () => {
    setFindDoctors(searchedText.data)
  }

  useState(() => {
    handleDoctorSearch()
  }, [searchedText.inputText])

  return (
    <div>
      <DoctorFilter searchedText={searchedText} setSearchedText={setSearchedText} handleDoctorSearch={handleDoctorSearch} />
      <Catagories setCategory={setCategory} category={category} />
      <Doctors searchedText={searchedText} findDoctors={findDoctors} category={category} setCategory={setCategory} />
    </div>
  )
}
