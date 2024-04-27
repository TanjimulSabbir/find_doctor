import { BsHospital } from "react-icons/bs";
import AppointmentInfo from "../../Tools/Appointment.json";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { data } from "autoprefixer";

export default function ModalMenu({ searchedText, setSearchedText, setFloatMenu, filterType, notFound, selectedData }) {
    const styleData = "cursor-pointer hover:bg-gray-800 transition-all duration-300 px-2 rounded flex space-x-2 items-center";

    const handleClick = (item) => {
        setSearchedText(prev => ({ ...prev, data: [item] }));
        setFloatMenu(false);
    }
    console.log(selectedData, filterType)

    return (
        <div className="space-y-2">
            {selectedData?.length > 0 ?
                selectedData.map(item => (
                    <p key={item.id} className={styleData} onClick={() => handleClick(item)}>

                        {notFound === "Hospital" ? <BsHospital /> : <img src={item.image} className="w-5 h-5 rounded-full" />}
                        <span> {item.name}</span>
                    </p>
                ))
                : <p className="text-center text-sm text-gray-500">No {notFound}(s) found!</p>
            }
        </div>
    );
}
