import { Link } from "react-router-dom";
import treatmentInfo from "../../Tools/Appointment.json"
import { IoMdContact, IoMdShare } from "react-icons/io";
import toast from "react-hot-toast";
import { IoLanguageOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { RiGraduationCapFill, RiPriceTagLine } from "react-icons/ri";
import { FaStethoscope } from "react-icons/fa";
import { CiMedicalCross } from "react-icons/ci";
import { LuStethoscope } from "react-icons/lu";
import { VscCoffee } from "react-icons/vsc";
import { MdPriceChange } from "react-icons/md";
export default function Doctors() {
    return (
        <div className="container mx-auto py-10 space-y-10 w-[80%]">
            {treatmentInfo.doctors.map(doctor => {
                const { id, name, specialize, description, degree, fee, image, hospitalId } = doctor;
                return (
                    <div key={id} className="relative w-[70%]  -red-600 flex items-center bg-white rounded-lg shadow-xl p-4">
                        <div className="flex gap-10 relative w-full">
                            <div>
                                <img src={image} className="min-w-48 max-w-48 h-48" alt={name} srcSet="" />
                                <p className="text-sm bg-[#D8EAFD] rounded py-1 -pt-3 text-center text-[#185FA0]">{Math.floor(Math.random() * (15 - 5 + 1) + 5)} years of experience.</p>
                            </div>

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
                        <div className="flex items-center w-[20%]">
                            <div className="absolute bottom-4 right-[20%]">
                                <Link className="text-[#185FA0] flex items-center justify-end" to={`/doctor/${id}`}>view more..</Link>
                            </div>
                            <div className="absolute right-5 bottom-16">
                                <Link to={`appintment/${id}`} className="appointmentBtn">Book Appointment</Link>
                            </div>

                            <div className="absolute bottom-4 right-5">
                                <p className="flex items-center space-x-1"> <span>Availability</span> <span className="text-sky-500 text-sm">Today</span></p>
                            </div>
                        </div>
                        <div className="absolute top-5 right-5 cursor-pointer" onClick={() => toast.success("shared")}>
                            <IoMdShare />
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
