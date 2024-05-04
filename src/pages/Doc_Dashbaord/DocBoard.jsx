import { useSelector } from "react-redux";
import Error from "../../UI/Error";

export default function DocBoard() {
    const { doctorLogInfo } = useSelector(state => state.authInfo);
    const appointmentInfo = JSON.parse(localStorage.getItem("appointmentInfo")) || [];

    if (appointmentInfo.length === 0) return <Error message={"No appointments found!"} />


    const matchedData = appointmentInfo.filter(appointment => appointment.docInfo.id === doctorLogInfo.id);

    if (matchedData.length === 0) return <Error message={"No appointments found!"} />
    return (
        <div className="max-w-xl mx-auto mt-8">
            {matchedData.map(appointment => (
                <div key={appointment.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
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
    )
}
