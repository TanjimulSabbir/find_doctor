import { useSelector } from "react-redux";
import Error from "../../UI/Error";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DocBoard() {
    const { doctorLogInfo } = useSelector(state => state.authInfo);
    const appointmentInfo = JSON.parse(localStorage.getItem("appointmentInfo")) || [];
    const localDoctorInfo = JSON.parse(localStorage.getItem("docLoginInfo"));

    const navigate=useNavigate();

    useEffect(() => {
        if (!localDoctorInfo?.id) {
            navigate("/doclogin")
        }
    }, [])

    const matchedData = appointmentInfo?.filter(appointment => appointment.docInfo.id === doctorLogInfo.id);

    console.log(doctorLogInfo, "from DocBoard")

    return (
        <div className="max-w-xl mx-auto mt-8">
            <div className="grow mb-8">
                <h2 className="text-2xl font-bold mb-2">Doctor Information</h2>
                <div className="bg-white rounded-lg shadow-md p-4 space-xy-1">
                    <p className="font-semibold">Doctor Name: <span className="text-sky-600">{doctorLogInfo.name}</span></p>
                    <p className="font-semibold">Degree: <span className="text-blue-600">{doctorLogInfo?.degree}</span></p>
                    <p className="font-semibold">Doctor Specialization: <span className="text-blue-600">{doctorLogInfo.specialize}</span></p>
                </div>
            </div>
            <div className="downSlider">
                <h2 className="text-2xl font-bold mb-4">Appointments({matchedData.length || 0})</h2>
                {matchedData.map((appointment, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <p className="font-bold text-lg mb-4">Appointment Details</p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">User Name:</span>
                                <span>{appointment.userInfo?.username || "Anonymous"}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">User Email:</span>
                                <span>{appointment.userInfo.email}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">Hospital Name:</span>
                                <span>{appointment.appointmentInfo.hospitalName}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">Booking Slot:</span>
                                <span>{appointment.appointmentInfo.slot}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {matchedData.length === 0 && <Error message={"No appointments found!"} />}
        </div>
    )
}
