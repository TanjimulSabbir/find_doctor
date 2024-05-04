import { useSelector } from "react-redux";
import Slots from "./Slots";

export default function ChooseHospitals({ fee, selectedHospitals, chooseData, setChooseData, handleSubmit }) {
    const { hospitals, slots } = useSelector(state => state.filteredDoctor);

    return (
        <form className="rightSlider mt-10 px-4" onSubmit={handleSubmit}>
            <h1 className="text-center text-xl sm:text-2xl font-bold">Choose the type of Appointment</h1>
            <div className="mt-5">
                <h1 className="text-xl font-bold">Choose fee</h1>
                <div className="mt-3">
                    <p className="flex items-center">
                        <input type="radio" id="clinic_visit" defaultChecked={true} name="fee" />
                        <label htmlFor="clinic_visit" className="ml-1 cursor-pointer">Clinic visit</label>
                    </p>
                    <p htmlFor="clinic_visit" className="ml-4 text-xs" >{fee}</p>
                </div>
            </div>
            <div className="mt-5">
                <h1 className="leftSlider text-xl font-bold">Choose Clinic</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
                    {hospitals.filter(hospital => selectedHospitals.includes(hospital.id)).map(hospital => (
                        <div key={hospital.id}>
                            <p className="flex space-x-1 items-center">
                                <input type="radio" id={`hospital_${hospital.id}`} name="hospital" value={hospital.name} required onChange={event => setChooseData(prev => ({ ...prev, hospitalName: event.target.value, hosId: hospital.id }))} />

                                <label htmlFor={`hospital_${hospital.id}`} className="cursor-pointer">{hospital.name}</label>
                            </p>
                            <p className="ml-5 text-xs">{hospital.open}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rightSlider mt-5">
                <h1 className="text-xl font-bold">Choose Time Slot</h1>
                <div className="space-y-3 mt-3">
                    <p className="text-lg font-bold">Morning</p>
                    <div className="flex items-center gap-5">
                        <Slots slots={slots[0].morning} setChooseData={setChooseData} chooseData={chooseData} />
                    </div>
                    <p className="text-lg font-bold">Afternoon</p>
                    <div className="flex items-center gap-5">
                        <Slots slots={slots[1].afternoon} setChooseData={setChooseData} chooseData={chooseData} />
                    </div>
                    <p className="text-lg font-bold">Evening</p>
                    <div className="flex items-center gap-5">
                        <Slots slots={slots[2].evening} setChooseData={setChooseData} chooseData={chooseData} />
                    </div>
                </div>
            </div>
            {/* Book Appointment */}
            <div className="pt-10">
                <button type="submit" className="detailsAppointmentBtn">Book Appointment</button>
            </div>
        </form>
    );
}
