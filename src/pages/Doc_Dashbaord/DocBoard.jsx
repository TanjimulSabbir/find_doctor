import { useState } from "react";
import Error from "../../UI/Error";
import { useSelector } from "react-redux";

export default function DocBoard() {
    const { doctorLogInfo } = useSelector(state => state.authInfo);
    const appointmentInfo = JSON.parse(localStorage.getItem("appointmentInfo"));

    console.log({ appointmentInfo, doctorLogInfo }, "appointmentInfo, doctorLogInfo")

    if (appointmentInfo.length < 0) return <Error message={"No appointment found!"} />

    const matchedData = appointmentInfo.filter(appoint => appoint.docInfo.id == doctorLogInfo.id);

    console.log(matchedData, "from docBoard");
    return (
        <div>
            {matchedData.map(appointment => (
                <div key={appointment.id} className="space-y-5">
                    <p className="flex flex-col">
                        <span>user Email</span>
                        <span>{appointment.userInfo.email}</span>
                    </p>
                    <p>
                        <span>Hospital Name</span>
                        <span>{appointment.appointmentInfo.hospitalName}</span>
                    </p>
                    <p>
                        <span>Booking Slot</span>
                        <span>{appointment.appointmentInfo.slot}</span>
                    </p>
                </div>
            ))}
        </div>
    )
}
