import { useState } from "react";
import AppointmentInfo from "../../Tools/Appointment.json"
import ModalMenu from "./ModalMenu";


export default function DoctorFilter({ searchedText, setSearchedText, handleDoctorSearch, category }) {
    const [floatMenu, setFloatMenu] = useState(false);
    const [filteredLocation, setFilteredLocation] = useState(AppointmentInfo.hospitals)

    const handleInput = (event) => {
        setSearchedText({ inputText: event.target.value });
        setFloatMenu(true);
    }

    const handleSearch = (event) => {
        setSearchedText(prev => ({ ...prev, [event.target.name]: event.target.value }))
    };

    console.log(searchedText, "From Doctor filter page");



    AppointmentInfo.doctors.filter(doctor => {
        if (!searchedText.category) return;
        
        const categorizedDoctor = doctor.category.toLowerCase().includes(searchedText.category?.toLowerCase());
        let findHospitalLocation;
        if (categorizedDoctor) {
            findHospitalLocation = AppointmentInfo.hospitals.filter(hospital => {
                return hospital.doctorId.includes(doctor.id)
            })
        }
        setFilteredLocation(findHospitalLocation)
    })

    return (
        <div className="w-full max-w-[60%] mx-auto flex items-center justify-center py-5 bg-white shadow-lg rounded-lg px-10">

            {/* category */}
            <div className="flex flex-col border-r border-gray-400 pr-4">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Select Treatment Category</label>
                <select className="text-[#185FA0] text-sm outline-none cursor-pointer" name="category" onChange={(event) => handleSearch(event)}>
                    <option value="">Not selected</option>
                    {[...new Set(AppointmentInfo.doctors.map(doctor => doctor.category))].map(category => (
                        <option className="py-2 cursor-pointer" key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>


            {/*Hospital Location */}
            <div className="flex flex-col border-r border-gray-400 px-4 text-start">
                <label htmlFor="" className="text-[10px] text-[#8B98B8] ">Select Location</label>
                <select className="text-[#185FA0] text-sm outline-none -ml-1 cursor-pointer" name="location" onChange={(event) => handleSearch(event)}>
                    <option value="">Not selected</option>
                    {(AppointmentInfo.hospitals).map(hospital => (
                        <option className="cursor-pointer" key={hospital.id} value={hospital.location}>{hospital.location}</option>
                    ))}

                </select>
            </div>

            {/* Search doctot, clinics, hospitals */}
            <div className="relative flex flex-col px-4 w-full">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Search doctor, clinic, hostpital etc</label>
                <input type="text" className="w-full outline-none text-sm" onChange={(event) => handleInput(event)} value={searchedText.name} />

                {/* Float filtering menu */}
                {floatMenu && searchedText.inputText !== "" && <div className="absolute top-12 bg-black text-white p-5 rounded space-y-5 z-50">
                    <p className="py-3 bg-sky-500 text-center">Doctors</p>
                    <ModalMenu searchedText={searchedText}
                        setSearchedText={setSearchedText}
                        setFloatMenu={setFloatMenu}
                        filterType="doctors"
                        notFound="Doctor"
                        selectedData={findHospitalLocation}
                    />

                    <p className="py-3 bg-sky-500 text-center">Hospitals</p>
                    <ModalMenu searchedText={searchedText}
                        setSearchedText={setSearchedText}
                        setFloatMenu={setFloatMenu}
                        filterType="hospitals"
                        notFound="Hospital"
                        selectedData={findHospitalLocation}
                    />
                </div>}
            </div>

            <button className="searchBtn" onClick={() => handleDoctorSearch()}>Search</button>
        </div >
    )
}
