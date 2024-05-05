/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoMdShare } from "react-icons/io";
import toast from "react-hot-toast";
import { IoLanguageOutline } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { CiMedicalCross } from "react-icons/ci";
import { LuStethoscope } from "react-icons/lu";
import HospitalMap from "./HospitalMap";
import { useEffect, useState } from "react";
import CategoryFilterNavbar from "./CategoryFilterNavbar";
import { useDispatch, useSelector } from "react-redux";
import { setInnerCategory, setShowType } from "../../Redux/Features/filterSlice";


export default function Doctors() {
    const { doctors, showFilteredData, searchedText } = useSelector(state => state.filteredDoctor)
    const [showDoctors, setShowDoctors] = useState(doctors);
    const dispatch = useDispatch();

    const handleShowAllClick = () => {
        dispatch(setShowType("all"))
        setShowDoctors(doctors);
    };

    const handleShowFilteredClick = () => {
        dispatch(setShowType("filtered"))
        dispatch(setInnerCategory(""))
        setShowDoctors(showFilteredData);
    };

    useEffect(() => {
        if (searchedText.showType == "all") {
            setShowDoctors(doctors);
        }
        if (searchedText.showType === "filtered") {
            setShowDoctors(showFilteredData)
        }

    }, [searchedText.showType, showFilteredData])

    const number = [];
    return (
        <div className="container mx-auto mt-10">
            <CategoryFilterNavbar handleShowFilteredClick={handleShowFilteredClick} handleShowAllClick={handleShowAllClick} />

            <div className="downSlider flex">
                <div className="space-y-10 w-[60%]">
                    {showDoctors.map(doctor => {
                        const { id, name, specialize, description, degree, fee, image, hospitalId } = doctor;
                        if (!specialize?.toLowerCase().includes(searchedText.innerCategory?.toLowerCase())) {
                            number.push(id)
                            return;
                        }
                        return (
                            <div key={id} className="leftSlider relative items-center bg-white rounded-lg shadow-xl p-4">
                                <div className="flex gap-10 relative">

                                    {/* Image information */}
                                    <div>
                                        <img src={image} className="min-w-48 max-w-48 h-48 rounded" alt={name} srcSet="" />
                                        <p className="text-sm bg-[#D8EAFD] rounded py-1 -pt-3 text-center text-[#185FA0]">{Math.floor(Math.random() * (15 - 5 + 1) + 5)} years of experience.</p>
                                    </div>

                                    {/* Text information */}
                                    <div className="relative space-y-1">
                                        <h3 className="font-bold flex items-center space-x-2 text-lg"><CiMedicalCross /> <span>{name}</span></h3>

                                        <p className="leading-snug flex space-x-2 pt-3">
                                            <RiGraduationCapFill className="text-base" />
                                            <span>{degree}</span></p>

                                        <p className="leading-tight flex items-center space-x-2"><LuStethoscope /> <span>{specialize}</span></p>

                                        <p className="text-xs flex items-center space-x-2">
                                            <IoLanguageOutline />
                                            <span>English/Bangla</span></p>

                                        <div className="font-extrabold absolute bottom-0 flex items-center space-x-10 w-full justify-between">
                                            <p className=""><span>{fee}</span></p>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    {/* view more */}
                                    <div className="absolute bottom-4 right-[23%] text-sm">
                                        <Link className="text-[#185FA0] flex items-center justify-end" to={`/appointment/${id}`}>view more</Link>
                                    </div>

                                    {/* Book Appointment */}
                                    <div className="absolute right-5 bottom-16">
                                        <Link to={`${id}`} className="appointmentBtn">Book Appointment</Link>
                                    </div>

                                    {/* available */}
                                    <div className="absolute bottom-4 right-5">
                                        <p className="flex items-center space-x-1 text-sm"> <span>Availability</span> <span className="text-sky-500 text-sm">Today</span></p>
                                    </div>

                                    {/* share button */}
                                    <div className="absolute top-5 right-5 cursor-pointer" onClick={() => toast.success("shared")}>
                                        <IoMdShare />
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    {/* Error */}
                    {number.length === doctors.length && (
                        <p className="grow mt-7 text-center text-xs text-red-500 flex flex-col leading-tight"> <span>Seems like there are no doctors in this category. Keep searching!</span>
                            <span className="text-[10px] text-green-600 cursor-pointer" onClick={() => dispatch(setShowType(""))}>Show Doctor</span>
                        </p>
                    )}
                </div>
                <HospitalMap location="Dhaka" />
            </div >
        </div >
    )
}
