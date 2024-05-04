import { IoLanguageOutline } from "react-icons/io5";
import { LuStethoscope } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import "../../style/Appointment.css"
import ChooseHospitals from "./ChooseHospitals";

export default function DocDetails() {
    const { doctors, showFilteredData } = useSelector(state => state.filteredDoctor);
    const docId = Number(useParams().docId);
    let doctorFee = 0;
    let hospitals = [];
    let content = doctors.filter(doctor => doctor.id == docId).map(doctor => {
        let { id, name, specialize, description, degree, fee, image, hospitalId } = doctor;
        doctorFee = fee
        hospitals = hospitalId;
        return (
            <div key={doctor.id} className="leftSlider bg-white rounded-lg shadow-xl py-10 px-5">
                <div className="w-full md:flex items-center md:items-start space-y-10 md:space-y-0 md:gap-x-10">
                    {/* Image information */}
                    <div className="md:w-[30%]">
                        <img src={image} className="w-full h-full" alt={name} srcSet="" />
                    </div>

                    {/* Text information */}
                    <div className="flex-1 space-y-1">
                        <h3 className="font-bold flex items-center space-x-2 text-xl">
                            <span>{name}</span>
                        </h3>

                        <p className="leading-snug flex space-x-2 pt-3">
                            <RiGraduationCapFill className="text-base" />
                            <span>{degree}</span>
                        </p>

                        <p className="leading-tight flex items-center space-x-2"><LuStethoscope /> <span>{specialize}</span>
                        </p>

                        <div className="flex items-center space-x-3 pb-7">
                            <p className="text-xs flex items-center space-x-2">
                                <IoLanguageOutline />
                                <span>English/Bangla</span>
                            </p>

                            <p className="text-sm">{Math.floor(Math.random() * (15 - 5 + 1) + 5)} years of experience.
                            </p>
                        </div>

                        <p>{description}</p>

                        {/* Book Appointment */}
                        <div className="pt-10">
                            <Link to={`/confirmed/${id}`} className="detailsAppointmentBtn">Book Appointment</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {content}
            <ChooseHospitals fee={doctorFee} selectedHospitals={hospitals} />
        </>
    )
}
