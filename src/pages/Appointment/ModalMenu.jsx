/* eslint-disable react/prop-types */
import { BsHospital } from "react-icons/bs";
import AppointmentInfo from "../../Tools/Appointment.json";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { data } from "autoprefixer";

export default function ModalMenu({ searchedText, setSearchedText, setFloatMenu, filterType, dataType, selectedData, UiData }) {
    const styleData = "transition-all duration-300 hover:bg-gray-800 px-2 py-1 rounded flex space-x-2 items-center cursor-pointer";

    const handleClick = (item) => {
        const storeData = dataType == "hospital" ? UiData : item;

        setSearchedText(prev => ({ ...prev, data: [storeData], inputText: item.name }));
        setFloatMenu(false);
    }
    console.log({ searchedText }, "searchText")

    return (
        <div>
            {selectedData?.length > 0 ?
                selectedData.map(item => (
                    <p key={item.id} className={styleData} onClick={() => handleClick(item)}>

                        {dataType === "hospital" ? <BsHospital className="h-8 w-8 max-w-4 max-h-4" /> : <img src={item.image} className="w-5 h-5 rounded-full" />}
                        <span> {item.name}</span>
                    </p>
                ))
                : <p className="text-center text-sm text-gray-500">
                    Oops! We couldn't find any hospitals offering <span className="text-sky-600 font-bold">{searchedText.category}</span> in <span className="text-sky-600 font-bold">{searchedText.location}</span>. Don't worry, we're here to help you find the right care. Please try refining your search or re-filter and check back later.
                    <p className="text-center">Thank you!</p>
                </p>
            }
        </div>
    );
}
