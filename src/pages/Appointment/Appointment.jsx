import DoctorFilter from "./DoctorFilter";
import "../../style/Appointment.css"
import Catagories from "./Catagories";
import Doctors from "./Doctors";
import { useState } from "react";


export default function Appointment() {
  const [category, setCategory] = useState("");
  const [searchedText, setSearchedText] = useState({ inputText: "" });
  return (
    <div>
      <DoctorFilter searchedText={searchedText} setSearchedText={setSearchedText} />
      <Catagories setCategory={setCategory} category={category} />

      <Doctors category={category} searchedText={searchedText} />
    </div>
  )
}
