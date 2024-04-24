import DoctorFilter from "./DoctorFilter";
import "../../style/Appointment.css"
import Catagories from "./Catagories";
import Doctors from "./Doctors";
import { useState } from "react";


export default function Appointment() {
  const [category, setCategory] = useState("")
  return (
    <div>
      <DoctorFilter />
      <Catagories setCategory={setCategory} category={category} />
      <Doctors category={category} />
    </div>
  )
}
