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

    setFindDoctors(treatmentInfo.doctors.filter(item => filterDoctorByLocation().doctorId.includes(item.id)))
  }

  const filterDoctorByLocation = () => treatmentInfo.hospitals.find(hospital => {
    const hospitalLocationMatched = hospital.location?.toLowerCase().includes(searchedText?.location?.toLowerCase());
    const hospitalNameMatched = hospital.name?.toLowerCase().includes(searchedText?.name?.toLowerCase());

    if (hospitalLocationMatched || hospitalNameMatched) {
      return hospital.doctorId
    }
  });


  console.log(findDoctors)

  return (
    <div>
      <DoctorFilter searchedText={searchedText} setSearchedText={setSearchedText} handleDoctorSearch={handleDoctorSearch} category={category} />

      <Catagories setCategory={setCategory} />

      <Doctors category={category} searchedText={searchedText} findDoctors={findDoctors} />
    </div>
  )
}
