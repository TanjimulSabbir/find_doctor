/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AppointmentInfo from "../../Tools/Appointment.json"
import ModalMenu from "./ModalMenu";
import { IoCloseOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { setFilteredDoctors, setFilteredHospitals } from "../../Redux/Features/filterSlice";

export default function DoctorFilter({ searchedText, setSearchedText, handleDoctorSearch, setFindDoctors }) {
    const [floatMenu, setFloatMenu] = useState(false);
    const { doctors, hospitals, filteredDoctors, filteredHospitals } = useSelector(state => state.filteredDoctor)

    const handleInput = (event) => {
        setSearchedText((prev) => ({ ...prev, inputText: event.target.value }));
    }

    const handleSearch = (event) => {
        setSearchedText(prev => ({ ...prev, [event.target.name]: event.target.value }));
        setFloatMenu(true);
    };

    const handleSaveData = ({ item, dataType }) => {
        toast.success(item.name)
        const storeData = dataType == "hospital" ? filteredDoctors : [item];
        setSearchedText(prev => ({ ...prev, data: storeData, inputText: item.name }));
        setFindDoctors(storeData)
        setFloatMenu(false);
    }
    console.log(searchedText)

    useEffect(() => {
        // !category+location, category+!location, !category+!location

        if (!searchedText.category) {
            setFilteredDoctors(doctors)
            setFilteredHospitals(hospitals)
            return;
        }


        // Filter doctors based on the selected category
        const categorizedfilteredDoctors = doctors.filter((doctor) => {
            const matchedDoctor = doctor.category.toLowerCase().includes(searchedText.category.toLowerCase());
            return matchedDoctor;
        });

        if (categorizedfilteredDoctors.length > 0) {
            setFilteredDoctors(categorizedfilteredDoctors)

            // Get hospitals associated with the filtered doctors
            const matchedHospitals = hospitals.filter(hospital => {
                return categorizedfilteredDoctors.some(doc => doc.hospitalId.includes(hospital.id))
            });
            // Set the filtered hospitals in state
            setFilteredHospitals(matchedHospitals);
        }
    }, [searchedText.category, searchedText.location]);


    useEffect(() => {
        // For select input
        // What location will be shown on location input based on category. If no category selected, then all location will be shown on select input. if category selected, respective doctor's hospital's location will be shown on selected input.

        // What will do inside program

        // [ if location has not been selected, all catagorized-filtered-hospitals will be shown ('setFilteredHospital').(location is empty, that's why it will return all element/hospital). 

        // another case location select:
        // If location is being selected, It will filter with categorized-filterd-hospital by matching with 'searchText.location' and will set into 'setfilteredHospital'. 'filteredHospital' will show the next step(modal menu) ].
        
        // !category+location, category+!location, !category+!location
        if (!searchedText.category && !searchedText.location) {
            setFilteredDoctors(doctors)
            setFilteredHospitals(hospitals)
            return;
        }
        if (searchedText.category && !searchedText.location) {
            setFilteredDoctors(filteredDoctors)
            setFilteredHospitals(filteredHospitals)
            return;
        }

        // Finding hospitals by location
        let filteredHospitalsByCat_Loc = []
        let filteredDoctorsByCat_Loc = [];
        let filteredHospitalsByLoc = [];
        let filteredDoctorsByLoc = [];
        // implicitly category + location
        if (searchedText.category && searchedText.location) {
            //filterd by category+location
            filteredHospitalsByCat_Loc = filteredHospitals.filter(hospital => {
                return hospital.location?.toLowerCase() === searchedText.location?.toLowerCase();
            });
            filteredDoctorsByCat_Loc = filteredDoctors.filter(doctor => {
                return filteredHospitalsByCat_Loc.some(hos => doctor.hospitalId.includes(hos.id))
            })
            setFilteredHospitals(filteredHospitalsByCat_Loc);
            setFilteredDoctors(filteredDoctorsByCat_Loc);
        }

        if (searchedText.location) {
            // filtered by only location
            filteredHospitalsByLoc = hospitals.filter(hospital => {
                return hospital.location.toLowerCase() === searchedText.location.toLowerCase();
            });
            filteredDoctorsByLoc = doctors.filter(doctor => {
                return filteredHospitalsByLoc.some(hos => hos.doctorId.includes(doctor.id))
            })
            setFilteredHospitals(filteredHospitalsByLoc);
            setFilteredDoctors(filteredDoctorsByLoc);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchedText.category, searchedText.location]);


    useEffect(() => {
        setFloatMenu
    }, [floatMenu])


    return (
        <div className="rightSlider w-full max-w-[60%] mx-auto flex items-center justify-center py-5 bg-white shadow-lg rounded-lg px-10">

            {/* category */}
            <div className="flex flex-col border-r border-gray-400 pr-4 w-[30%]">
                <label htmlFor="" className="text-[10px] text-[#8B98B8]">Select Treatment Category</label>
                <select className="text-[#185FA0] text-sm outline-none bg-transparent cursor-pointer" name="category" onChange={(event) => handleSearch(event)}>
                    <option value="">Not selected</option>
                    {[...new Set(AppointmentInfo.doctors.map(doctor => doctor.category))].map(category => (
                        <option className="py-2 cursor-pointer" key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>


            {/*Hospital Location */}
            <div className="flex flex-col border-r border-gray-400 px-4 text-start w-[30%]">
                <label htmlFor="" className="text-[10px] text-[#8B98B8] ">Select Location</label>
                <select className="grow text-[#185FA0] text-sm outline-none -ml-1 bg-transparent cursor-pointer" name="location" onChange={(event) => handleSearch(event)} value={searchedText.location}>

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
                        setSearchedText={setSearchedText}
                        setFloatMenu={setFloatMenu}
                        filterType="doctors"
                        dataType="doctor"
                        selectedData={filteredDoctors}
                        handleSaveData={handleSaveData}
                    />

                    <p className="py-1 bg-sky-500 text-center rounded">Hospitals</p>
                    <ModalMenu searchedText={searchedText}
                        setSearchedText={setSearchedText}
                        setFloatMenu={setFloatMenu}
                        filterType="hospitals"
                        dataType="hospital"
                        selectedData={filteredHospitals}
                        // when user will select hospital, needed to respective hospital's all doctor. That's why we pass it for process to show on UI
                        UiData={filteredDoctors}
                        handleSaveData={handleSaveData}
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
