import { BsHospital } from "react-icons/bs";
import AppointmentInfo from "../../Tools/Appointment.json"

export default function ModalMenu({ searchedText, setFloatMenu, setSearchedText }) {
    return (
        <div className="absolute top-10 bg-black text-white p-5 rounded space-y-3 z-50"> {
            AppointmentInfo.hospitals.filter(hospital => hospital.name?.toLowerCase().includes(searchedText)).length > 0 ?

                AppointmentInfo.hospitals.filter(hospital => hospital.name?.toLowerCase().includes(searchedText))
                    .map(hospital => (<p key={hospital.id} data-name="hospitalName" data-value={hospital.name} className="cursor-pointer hover:bg-gray-800 transition-all duration-300 px-2 rounded flex space-x-2 items-center" onClick={() => setSearchedText(hospital.name)}>

                        <BsHospital />

                        <span> {hospital.name}</span></p>))
                : <p className="text-center text-sm text-gray-500">No hospital(s) found!</p>
        }</div>
    )
}
