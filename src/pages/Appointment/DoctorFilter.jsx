/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AppointmentInfo from "../../Tools/Appointment.json"
import ModalMenu from "./ModalMenu";
import toast from "react-hot-toast";


export default function DoctorFilter({ searchedText, setSearchedText, handleDoctorSearch }) {
    const [floatMenu, setFloatMenu] = useState(false);
    const [filteredHospitals, setfilteredHospitals] = useState(AppointmentInfo.hospitals);
    const [filteredDoctors, setFilteredDoctors] = useState(AppointmentInfo.doctors);
    const [tempo, setTempo] = useState(AppointmentInfo.hospitals);

    const handleInput = (event) => {
        setSearchedText((prev) => ({ ...prev, inputText: event.target.value }));
        setFloatMenu(true);
    }

    const handleSearch = (event) => {
        setSearchedText(prev => ({ ...prev, [event.target.name]: event.target.value }))
    };

    useEffect(() => {
        // Filter doctors based on the selected category
        const categoriesfilteredDoctors = AppointmentInfo.doctors.filter((doctor) => {
            const matchedDoctor = doctor.category?.toLowerCase().includes(searchedText.category?.toLowerCase());
            return matchedDoctor;
        });

        if (categoriesfilteredDoctors.length > 0) {
            setFilteredDoctors(categoriesfilteredDoctors)
            const doctorsId = categoriesfilteredDoctors.map(doctor => doctor.id);

            // Get hospitals associated with the filtered doctors
            const matchedHospitals = AppointmentInfo.hospitals.filter((hospital) => {
                return hospital.doctorId.some(id => doctorsId.includes(id));
            });

            // Set the filtered hospitals in state
            setfilteredHospitals(matchedHospitals);
            setTempo(matchedHospitals);
            console.log({ matchedHospitals })
        }
    }, [searchedText.category]);


    useEffect(() => {
   
            const filterHospitals02 = tempo.filter(hospital => {
                return hospital.location?.toLowerCase().includes(searchedText.location?.toLowerCase());
            });

            setfilteredHospitals(filterHospitals02);
       console.log(searchedText.location);

    }, [searchedText.category, searchedText.location, tempo]);

    console.log({ searchedText: searchedText, filteredHospitals: filteredHospitals, filteredDoctors: filteredDoctors })

    return (
        <div className="w-full max-w-[60%] mx-auto flex items-center justify-center py-5 bg-white shadow-lg rounded-lg px-10">

            {/* category */}
            <div className="flex flex-col border-r border-gray-400 pr-4">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Select Treatment Category</label>
                <select className="text-[#185FA0] text-sm outline-none bg-transparent cursor-pointer" name="category" onChange={(event) => handleSearch(event)}>
                    <option value="">Not selected</option>
                    {[...new Set(AppointmentInfo.doctors.map(doctor => doctor.category))].map(category => (
                        <option className="py-2 cursor-pointer" key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>


            {/*Hospital Location */}
            <div className="flex flex-col border-r border-gray-400 px-4 text-start">
                <label htmlFor="" className="text-[10px] text-[#8B98B8] ">Select Location</label>
                <select className="text-[#185FA0] text-sm outline-none -ml-1 bg-transparent cursor-pointer" name="location" onChange={(event) => handleSearch(event)} value={searchedText.location}>
                    <option value="" className="bg-green-600">{searchedText.location ? searchedText.location : "Not selected"}</option>
                    {searchedText.location && tempo.length > 0 && <option value="">Not selected</option>}
                    {tempo.map(hospital => (
                        <option className="cursor-pointer" key={hospital.id} value={hospital.location}>{hospital.location}</option>
                    ))}
                </select>
            </div>


            {/* Search doctot, clinics, hospitals */}
            <div className="relative flex flex-col px-4 w-full"
            >
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Search doctor, clinic, hostpital etc</label>
                <input type="text" name="inputText" className="w-full outline-none text-sm bg-transparent" onChange={(event) => handleInput(event)} value={searchedText.inputText} placeholder="choose your doctor/hospital" />

                {/* Float filtering menu */}
                {floatMenu && searchedText.inputText !== "" && <div className="absolute top-12 bg-black text-white p-5 rounded space-y-5 z-50">
                    <p className="py-3 bg-sky-500 text-center">Doctors</p>
                    <ModalMenu searchedText={searchedText}
                        setSearchedText={setSearchedText}
                        setFloatMenu={setFloatMenu}
                        filterType="doctors"
                        notFound="Doctor"
                        selectedData={filteredDoctors}
                    />

                    <p className="py-3 bg-sky-500 text-center">Hospitals</p>
                    <ModalMenu searchedText={searchedText}
                        setSearchedText={setSearchedText}
                        setFloatMenu={setFloatMenu}
                        filterType="hospitals"
                        notFound="Hospital"
                        selectedData={filteredHospitals}
                    />
                </div>}
            </div>

            <button className="searchBtn" onClick={() => handleDoctorSearch()}>Search</button>
        </div >
    )
}
