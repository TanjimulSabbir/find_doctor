import DoctorFilter from "./DoctorFilter";
import "../../style/Appointment.css"
import Catagories from "./Catagories";
import Doctors from "./Doctors";
import { useState } from "react";
import toast from "react-hot-toast";
import treatmentInfo from "../../Tools/Appointment.json"


export default function Appointment() {
  const [category, setCategory] = useState("");
  const [searchedText, setSearchedText] = useState({ category: "", location: "", inputText: "", data: [] });
  const [findDoctors, setFindDoctors] = useState([]);

  const handleDoctorSearch = () => {
    setFindDoctors([...searchedText.data])
  }

  useState(() => {
    setFindDoctors(searchedText.data)
  }, [searchedText.data])

  return (
    <div>
      <DoctorFilter searchedText={searchedText} setSearchedText={setSearchedText} handleDoctorSearch={handleDoctorSearch} />
      <Catagories setCategory={setCategory} />

      <Doctors findDoctors={findDoctors} />
    </div>
  )
}
