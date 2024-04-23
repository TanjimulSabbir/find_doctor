import { Link } from "react-router-dom";
import treatmentInfo from "../../Tools/Appointment.json"
export default function Doctors() {
    return (
        <div className="container mx-auto mt-10 py-10 space-y-10 w-full border border-red-600">
            {treatmentInfo.doctors.map(doctor => {
                const { id, name, specialize, description, degree, fee, image, hospitalId } = doctor;
                return (
                    <div key={id} className="relative w-full flex items-center">
                        <div className="flex gap-10 relative w-[40%] border border-green-600">
                            <div className="">
                                <img src={image} className="min-w-48 max-w-48 h-48" alt={name} srcSet="" />
                                <p className="text-sm bg-gray-300 rounded py-1 -pt-3 text-center">{Math.floor(Math.random() * (15 - 5 + 1) + 5)} years of experience.</p>
                            </div>

                            <div className="relative space-y-1">
                                <h3 className="font-bold">{name}</h3>
                                <p className="">{degree}</p>
                                <p>{specialize}</p>
                                <p>English/Bangla</p>
                                <div className="font-extrabold absolute bottom-0 flex items-center space-x-10 w-full">
                                    <p >{fee}</p>

                                </div>
                            </div>

                        </div>
                        <div className="flex items-center w-[20%] border -ml-16">
                            <div className=" absolute bottom-0 border flex items-center space-x-10 ">

                                <Link className="text-blue-600" to={`/doctor/${id}`}>view more..</Link>
                                <p className="flex items-center space-x-1"> <span>Availability</span> <span className="text-sky-500 text-sm">Today</span></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
