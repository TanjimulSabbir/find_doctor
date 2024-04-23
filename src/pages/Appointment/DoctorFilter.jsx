import { useState } from "react"
import AppointmentInfo from "../../Tools/Appointment.json"
import { FaHospital } from "react-icons/fa";
import { BsHospital } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import doctorSvg from "../../assets/images/doctor01.svg"

export default function DoctorFilter() {
    const [inputSearch, setInputSearch] = useState("");
    const [floatMenu, setFloatMenu] = useState(true);

    // const handleInput = (data) => {
    //     setInputSearch("");
    //     setInputValue(data)
    // }
    return (
        <div className="w-full max-w-[60%] mx-auto flex items-center justify-center py-5 bg-white shadow-lg rounded-lg px-10">
            <div className="flex flex-col border-r border-gray-400 pr-4">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Select Treatment Catagory</label>
                <select className="text-[#185FA0] text-sm outline-none cursor-pointer">
                    {AppointmentInfo.categories.map(category => (
                        <option className="py-2 cursor-pointer" key={category.id} value={category.title}>{category.title}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col border-r border-gray-400 px-4 text-start">
                <label htmlFor="" className="text-[10px] text-[#8B98B8] ">Select Location</label>
                <select className="text-[#185FA0] text-sm outline-none -ml-1 cursor-pointer">
                    {AppointmentInfo.locations.map(location => (
                        <option className="" key={location.id} value={location.location}>{location.location}</option>
                    ))}
                </select>
            </div>

            {/* Search doctot, clinics, hospitals */}
            <div className="relative flex flex-col px-4 w-full">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Search doctor, clinic, hostpital etc</label>
                <input type="text" className="w-full outline-none text-sm" onChange={(e) => { setInputSearch(e.target.value?.toLowerCase()); setFloatMenu(true); }} value={inputSearch} />

                {floatMenu && inputSearch !== "" && (
                    <p className="absolute top-10 left-0 bg-black text-white p-4 rounded-lg flex flex-col gap-3 z-50">

                        <p className="bg-green-500 py-1 rounded text-center text-sm">Doctors</p>
                        {AppointmentInfo.doctors
                            .filter(doctor => doctor.name?.toLowerCase().includes(inputSearch))
                            .length > 0 ? (
                            AppointmentInfo.doctors
                                .filter(doctor => doctor.name?.toLowerCase().includes(inputSearch))
                                .map(item => (
                                    <p key={item.id} className="cursor-pointer hover:bg-gray-800 transition-all duration-300 px-2 rounded flex items-center space-x-2" onClick={() => { setInputSearch(item.name); setFloatMenu(false); }}>
                                        <img src={item.image} className="w-5 h-5 rounded-full" alt="" srcSet="" /> <span>{item.name}</span></p>
                                ))
                        ) : (
                            <p className="text-center text-sm text-gray-500">No doctor(s) found!</p>
                        )
                        }

                        <p className="bg-green-500 py-1 rounded text-center text-sm">Hospitals</p>
                        {
                            AppointmentInfo.hospitals.filter(hospital => hospital.name?.toLowerCase().includes(inputSearch)).length > 0 ?

                                AppointmentInfo.hospitals.filter(hospital => hospital.name?.toLowerCase().includes(inputSearch))
                                    .map(hospital => (<p key={hospital.id} className="cursor-pointer hover:bg-gray-800 transition-all duration-300 px-2 rounded flex space-x-2 items-center" onClick={() => { setInputSearch(hospital.name); setFloatMenu(false); }}>
                                        <BsHospital />  <span> {hospital.name}</span></p>))
                                : <p className="text-center text-sm text-gray-500">No hospital(s) found!</p>
                        }
                    </p>
                )}

            </div>

            <button className="searchBtn">Search</button>
        </div>
    )
}
