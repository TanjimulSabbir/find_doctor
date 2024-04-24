import { useState } from "react"
import AppointmentInfo from "../../Tools/Appointment.json"
import { BsHospital } from "react-icons/bs";


export default function DoctorFilter() {
    const [inputSearch, setInputSearch] = useState("");
    const [floatMenu, setFloatMenu] = useState(true);
    const [searchedKeyword, setSearchedKeyword] = useState({});

    const handleSearch = (event) => {
        const target = event.target;
        setSearchedKeyword(prev => ({ ...prev, [target.getAttribute('data-name')]: target.getAttribute('data-value') }));
    };

    console.log(searchedKeyword, "From filteing page");

    return (
        <div className="w-full max-w-[60%] mx-auto flex items-center justify-center py-5 bg-white shadow-lg rounded-lg px-10">
            <div className="flex flex-col border-r border-gray-400 pr-4">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Select Treatment Catagory</label>
                <select className="text-[#185FA0] text-sm outline-none cursor-pointer" data-name="category" data-value={event.target.value} onChange={(event) => handleSearch(event)}>
                    {AppointmentInfo.categories.map(category => (
                        <option className="py-2 cursor-pointer" key={category.id} value={category.title}>{category.title}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col border-r border-gray-400 px-4 text-start">
                <label htmlFor="" className="text-[10px] text-[#8B98B8] ">Select Location</label>
                <select className="text-[#185FA0] text-sm outline-none -ml-1 cursor-pointer" data-name="location" data-value={event.target.value} onChange={(event) => handleSearch(event)}>

                    {AppointmentInfo.locations.map(location => (
                        <option className="" key={location.id} value={location.location}>{location.location}</option>
                    ))}
                </select>
            </div>

            {/* Search doctot, clinics, hospitals */}
            <div className="relative flex flex-col px-4 w-full">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Search doctor, clinic, hostpital etc</label>
                <input type="text" className="w-full outline-none text-sm" name="doctorName" onChange={(event) => { setInputSearch(event.target.value?.toLowerCase()); setFloatMenu(true); }} value={inputSearch} />


                {/* Modal Menu */}
                {floatMenu && inputSearch !== "" && (
                    <p className="absolute top-10 left-0 bg-black text-white p-4 rounded-lg flex flex-col gap-3 z-50">

                        <p className="bg-green-500 py-1 rounded text-center text-sm">Doctors</p>
                        {AppointmentInfo.doctors
                            .filter(doctor => doctor.name?.toLowerCase().includes(inputSearch))
                            .length > 0 ? (
                            AppointmentInfo.doctors
                                .filter(doctor => doctor.name?.toLowerCase().includes(inputSearch))
                                .map(item => (
                                    <p key={item.id} data-name="doctorName" data-value={item.name} className="cursor-pointer hover:bg-gray-800 transition-all duration-300 px-2 rounded flex items-center space-x-2"

                                        onClick={(event) => { setInputSearch(item.name); handleSearch(event); setFloatMenu(false); }}>
                                        <img src={item.image} className="w-5 h-5 rounded-full" alt="" srcSet="" />

                                        <span>{item.name}</span></p>
                                ))
                        ) : (
                            <p className="text-center text-sm text-gray-500">No doctor(s) found!</p>
                        )
                        }

                        <p className="bg-green-500 py-1 rounded text-center text-sm">Hospitals</p>
                        {
                            AppointmentInfo.hospitals.filter(hospital => hospital.name?.toLowerCase().includes(inputSearch)).length > 0 ?

                                AppointmentInfo.hospitals.filter(hospital => hospital.name?.toLowerCase().includes(inputSearch))
                                    .map(hospital => (<p key={hospital.id} data-name="hospitalName" data-value={hospital.name} className="cursor-pointer hover:bg-gray-800 transition-all duration-300 px-2 rounded flex space-x-2 items-center"

                                        onClick={(event) => {
                                            setInputSearch(hospital.name); handleSearch(event);
                                            setFloatMenu(false);
                                        }}>


                                        <BsHospital />

                                        <span> {hospital.name}</span></p>))
                                : <p className="text-center text-sm text-gray-500">No hospital(s) found!</p>
                        }
                    </p>
                )}

            </div>

            <button className="searchBtn">Search</button>
        </div>
    )
}
