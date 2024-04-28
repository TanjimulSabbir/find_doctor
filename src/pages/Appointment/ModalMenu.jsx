/* eslint-disable react/prop-types */
import { BsHospital } from "react-icons/bs";

export default function ModalMenu({ searchedText, setSearchedText, setFloatMenu, filterType, dataType, selectedData, UiData, handleSaveData }) {
    const styleData = "transform transition-all duration-300 hover:bg-gray-800 px-2 py-1 rounded flex space-x-2 items-center opacity-100 cursor-pointer";


    console.log(searchedText, "from float modal")
    return (
        <div>
            {selectedData?.length > 0 ?
                selectedData.map(item => (
                    <p key={item.id} className={`${styleData} ${searchedText.inputText === item.name && "bg-green-600"}`} onClick={() => handleSaveData({ item, dataType })}>

                        {dataType === "hospital" ? <BsHospital className="h-8 w-8 max-w-4 max-h-4" /> : <img src={item.image} className="w-5 h-5 rounded-full" />}
                        <span> {item.name}</span>
                    </p>
                ))
                : <p className="text-center text-sm text-gray-500">
                    Oops! We couldn't find any hospitals offering <span className="text-sky-600 font-bold">{searchedText.category}</span> in <span className="text-sky-600 font-bold">{searchedText.location}</span>. Don't worry, we're here to help you find the right care. Please try refining your search or re-filter and check back later.
                    <br />
                    <p className="text-center text-green-500 lobster">We appreciate your patience. 😊</p>
                </p>
            }
        </div>
    );
}
