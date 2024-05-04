/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AppointmentInfo from "../../Tools/Appointment.json"
import ModalMenu from "./ModalMenu";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setFilteredDoctors, setFilteredHospitals, setInputText, setLocation } from "../../Redux/Features/filterSlice";

export default function DoctorFilter({ handleDoctorSearch }) {
    const [floatMenu, setFloatMenu] = useState(false);
    const { doctors, hospitals, filteredDoctors, searchedText } = useSelector(state => state.filteredDoctor);

    const [tempo, setTempo] = useState(hospitals);
    const dispatch = useDispatch();

    const handleInput = (event) => {
        const data = event.target.value
        dispatch(setInputText(data))
    }

    const handleChangeSearch = (event) => {
        const name = event.target.name
        name == "location" ? dispatch(setLocation(event.target.value)) : dispatch(setCategory(event.target.value));
        setFloatMenu(true);
    };


    useEffect(() => {

        // Filter doctors based on the selected category
        const categoriesfilteredDoctors = doctors.filter((doctor) => {
            if (searchedText.category === "") return true;
            const matchedDoctor = doctor.category?.toLowerCase() === (searchedText.category?.toLowerCase());
            return matchedDoctor;
        });

        if (categoriesfilteredDoctors.length > 0) {
            dispatch(setFilteredDoctors(categoriesfilteredDoctors))
            const doctorsId = categoriesfilteredDoctors.map(doctor => doctor.id);

            // Get hospitals associated with the filtered doctors
            const matchedHospitals = AppointmentInfo.hospitals.filter((hospital) => {
                return hospital.doctorId.some(id => doctorsId.includes(id));
            });
            // Set the filtered hospitals in state
            dispatch(setFilteredHospitals(matchedHospitals));
            setTempo(matchedHospitals);
        }
    }, [searchedText.category]);


    useEffect(() => {
        // For select input
        // What location will be shown on location input based on category. If no category selected, then all location will be shown on select input. if category selected, respective doctor's hospital's location will be shown on selected input.

        // What will do inside program

        // [ if location has not been selected, all catagorized-filtered-hospitals will be shown ('setFilteredHospital').(location is empty, that's why it will return all element/hospital). 

        // another case location select:
        // If location is being selected, It will filter with categorized-filterd-hospital by matching with 'searchText.location' and will set into 'setfilteredHospital'. 'filteredHospital' will show the next step(modal menu) ].


        const filterHospitals02 = tempo.filter(hospital => {
            if (searchedText.location === "") return true;
            return hospital.location?.toLowerCase() === searchedText.location?.toLowerCase();
        });

        dispatch(setFilteredHospitals(filterHospitals02));
        if (searchedText.category) return;

        const doctorsToFilter = filteredDoctors.length <= doctors.length ? doctors : filteredDoctors;

        const matchedDoctor = doctorsToFilter.filter(doctor =>
            filterHospitals02.some(hos => hos.doctorId.includes(doctor.id))
        );
        dispatch(setFilteredDoctors(matchedDoctor));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchedText.category, searchedText.location, tempo]);


    return (
        <div className="rightSlider w-full md:max-w-[60%] mx-auto flex items-center justify-center py-5 bg-white shadow-lg rounded-lg px-10">

            {/* category */}
            <div className="flex flex-col border-r border-gray-400 pr-4 w-full md:w-[30%]">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Select Treatment Category</label>
                <select className="text-[#185FA0] text-sm outline-none bg-transparent cursor-pointer" name="category" onChange={(event) => handleChangeSearch(event)}>
                    <option value="">Not selected</option>
                    {[...new Set(doctors.map(doctor => doctor.category))].map(category => (
                        <option className="py-2 cursor-pointer" key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/*Hospital Location */}
            <div className="flex flex-col border-r border-gray-400 px-4 text-start md:w-[30%]">
                <label htmlFor="" className="text-[10px] text-[#8B98B8] ">Select Location</label>
                <select className="grow text-[#185FA0] text-sm outline-none -ml-1 bg-transparent cursor-pointer" name="location" onChange={(event) => handleChangeSearch(event)} value={searchedText.location}>

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
                <input type="text" name="inputText" className={`grow w-full outline-none text-sm bg-transparent placeholderText ${floatMenu && "text-green-600 font-bold"}`} onChange={(event) => handleInput(event)} onClick={() => setFloatMenu(true)} value={searchedText.inputText} placeholder="choose here doctor/hospital" />

                {/* Float filtering menu */}
                {floatMenu && <div className={`${floatMenu ? "grow" : "fade-out"} absolute top-12 bg-black text-white p-5 rounded space-y-5 z-40 w-full`}>
                    <p className="py-1 bg-sky-500 text-center rounded">Doctors</p>
                    <ModalMenu searchedText={searchedText}
                        setFloatMenu={setFloatMenu}
                        dataType="doctor"
                    />

                    <p className="py-1 bg-sky-500 text-center rounded">Hospitals</p>
                    <ModalMenu searchedText={searchedText}
                        setFloatMenu={setFloatMenu}
                        dataType="hospital"
                    />
                    <IoCloseOutline className="absolute -top-3 right-1 text-sm text-red-700 z-50 cursor-pointer transition transform duration-300 hover:scale-125" onClick={() => setFloatMenu(false)} title="Close Modal" />
                </div>
                }
                <p className="absolute right-4 top-3 cursor-pointer text-red-700 lobster-two-bold" onClick={() => setFloatMenu(false)}>
                    close
                </p>
            </div>

            <button className={`grow searchBtn ${searchedText.inputText === "" && "hiddenSearchBtn"}`} disabled={searchedText.inputText === ""} onClick={() => handleDoctorSearch()}>Search</button>
        </div >
    )
}