import { Link } from "react-router-dom";
import treatmentInfo from "../../Tools/Appointment.json"
import { IoMdShare } from "react-icons/io";
import toast from "react-hot-toast";
export default function Doctors() {
    return (
        <div className="container mx-auto mt-10 py-10 space-y-10 w-[80%] border border-green-600">
            {treatmentInfo.doctors.map(doctor => {
                const { id, name, specialize, description, degree, fee, image, hospitalId } = doctor;
                return (
                    <div key={id} className="relative w-[70%] border border-red-600 flex items-center">
                        <div className="flex gap-10 relative w-[65%]">
                            <div className="">
                                <img src={image} className="min-w-48 max-w-48 h-48" alt={name} srcSet="" />
                                <p className="text-sm bg-gray-300 rounded py-1 -pt-3 text-center">{Math.floor(Math.random() * (15 - 5 + 1) + 5)} years of experience.</p>
                            </div>

                            <div className="relative space-y-1">
                                <h3 className="font-bold">{name}</h3>
                                <p className="text-sm leading-snug">{degree}</p>
                                <p className="text-sm pt-2 leading-tight">{specialize}</p>
                                <p className="text-xs">English/Bangla</p>
                                <div className="font-extrabold absolute bottom-0 flex items-center space-x-10 w-full justify-between">

                                    <p >{fee}</p>

                                </div>
                            </div>

                        </div>
                        <div className="flex items-center w-[20%] border">
                            <div className="absolute bottom-0">
                                <Link className="text-[#185FA0] flex items-center justify-end" to={`/doctor/${id}`}>view more..</Link>
                            </div>
                            <div className="absolute right-0 bottom-11">
                                <Link to={`appintment/${id}`} className="appointmentBtn">Book Appointment</Link>
                            </div>

                            <div className="absolute bottom-0 right-0">
                                <p className="flex items-center space-x-1"> <span>Availability</span> <span className="text-sky-500 text-sm">Today</span></p>
                            </div>
                        </div>
                        <div className="absolute top-1 right-1 cursor-pointer" onClick={()=>toast.success("shared")}>
                            <IoMdShare />
                        </div>
                    </div>
                )
            })}


        </div >
    )
}
