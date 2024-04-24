import { BsHospital } from "react-icons/bs";
import AppointmentInfo from "../../Tools/Appointment.json"

export default function ModalMenu({ searchedText, setFloatMenu, setSearchedText, filterType, notFound }) {
    const styleData = "cursor-pointer hover:bg-gray-800 transition-all duration-300 px-2 rounded flex space-x-2 items-center";

    const handleClick = (item) => {
        setSearchedText({ id: item.id, text: item.name });
        setFloatMenu(false)
    }

    return (
        <div className="space-y-2"> {
            AppointmentInfo[filterType].filter(item => item.name?.toLowerCase().includes(searchedText)).length > 0 ?

                AppointmentInfo[filterType].filter(item => item.name?.toLowerCase().includes(searchedText))
                    .map(item => (

                        <p key={item.id} className={styleData} onClick={() => handleClick({ item })}>

                            <>
                                {notFound === "Hospital" ? <BsHospital /> : <img src={item.image} className="w-5 h-5 rounded-full" />}
                                <span> {item.name}</span>
                            </>
                        </p>))
                : <p className="text-center text-sm text-gray-500">No {notFound}(s) found!</p>
        }</div>
    )
}
