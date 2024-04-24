import { BsHospital } from "react-icons/bs";
import AppointmentInfo from "../../Tools/Appointment.json";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ModalMenu({ searchedText, setSearchedText, setFloatMenu, parentFunction, filterType, notFound }) {
    const styleData = "cursor-pointer hover:bg-gray-800 transition-all duration-300 px-2 rounded flex space-x-2 items-center";
    const [dynamicSearchText, setDynamicSearchText] = useState(searchedText.inputText)
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setDynamicSearchText(searchedText.inputText)
    }, [searchedText.inputText]);

    useEffect(() => {
        const filtered = AppointmentInfo[filterType].filter(item =>
            item.name?.toLowerCase().includes(dynamicSearchText.toLowerCase())
        );
        setFilteredData(filtered);
    }, [dynamicSearchText, filterType]);

    const handleClick = (item) => {
        setSearchedText({ id: item.id, name: item.name, inputText: "" });
        setFloatMenu(false);
    }

    return (
        <div className="space-y-2">
            {filteredData.length > 0 ?
                filteredData.map(item => (
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
