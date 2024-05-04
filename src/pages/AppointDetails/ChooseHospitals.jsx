import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ChooseHospitals({ fee, selectedHospitals }) {
    const { doctors, hospitals, slots, showFilteredData } = useSelector(state => state.filteredDoctor);
    const docId = Number(useParams().docId);

    return (
        <div>
            <h1>Choose the type of Appointment</h1>
            <div>
                <h1>Choose fee</h1>
                <label htmlFor="clinic_visit">Clinic visit</label>
                <input type="radio" id="clinic_visit" name="fee" value={fee} />
            </div>

            <div className="mt-5">
                <h1>Choose Clinic</h1>
                <div className="grid grid-cols-5 gap-5">
                    {hospitals.filter(hospital => selectedHospitals.includes(hospital.id)).map(hospital => (
                        <div key={hospital.id} >

                            <p className="space-x-2">
                                <input type="radio" id="hospital" name="hospital" />
                                <label htmlFor="hospital">{hospital.name}</label>
                            </p>
                            <p>{hospital.open}</p>

                        </div>
                    ))}
                </div>

            </div>
            <div>
                <h1>Choose Time Slot</h1>
            </div>
        </div>
    )
}
