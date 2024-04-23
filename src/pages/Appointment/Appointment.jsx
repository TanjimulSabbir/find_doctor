import DoctorFilter from "./DoctorFilter";
import "../../style/Appointment.css"
import Catagories from "./Catagories";
import Doctors from "./Doctors";


export default function Appointment() {
  return (
    <div>
      <DoctorFilter />
      <Catagories />
      <Doctors/>
    </div>
  )
}
