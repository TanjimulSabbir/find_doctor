import { FiSearch } from "react-icons/fi"
import banner from "../../assets/images/banner02.svg"
import { BiSolidLocationPlus } from "react-icons/bi"
import style from "../style/navbar.module.css"
import { useState } from "react"

export default function Banner02() {
    const [inputText, setInputText] = useState({});

    const handleInputChange = (event) => {
        const inputKey = event.target.name;
        const inputValue = event.target.value;
        setInputText((prev) => ({ ...prev, [inputKey]: inputValue }));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
    }

    return (
        <div className="container mx-auto px-10">
            {/* <img src={banner} alt="" srcSet="" /> */}

            <form className="flex items-center space-x-4 p-10 bg-white shadow-2xl z-50 rounded-md" onSubmit={handleFormSubmit}>
                <div className="relative w-full">
                    <input type="text" id="doctor" name="doctor" className={`${style.inputBox}`} onChange={handleInputChange} />
                    <label htmlFor="doctor">
                        {!inputText["doctor"] && <span className="absolute top-[15px] left-4 flex space-x-2 items-center opacity-70 cursor-pointer">
                            <FiSearch />
                            <span>ex, Doctor, Hospital</span>
                        </span>}
                    </label>
                </div>
                <div className="relative w-full inputBoxContainter">
                    <input type="text" id="surgeon" name="surgeon" className={`${style.inputBox}`} onChange={handleInputChange} />
                    <label htmlFor="surgeon">
                        {!inputText["surgeon"] && <span className="absolute top-[15px] left-4 flex space-x-2 items-center opacity-70 cursor-pointer">
                            <FiSearch />
                            <span>ex, Surgeon, Cardiologist</span>
                        </span>}
                    </label>
                </div>
                <div className="relative w-full">
                    <input type="text" id="location" name="location" className={`${style.inputBox}`} onChange={handleInputChange} />
                    <label htmlFor="location">
                        {!inputText["location"] && <span className="absolute top-[15px] left-4 flex space-x-2 items-center opacity-70 cursor-pointer">
                            <BiSolidLocationPlus />
                            <span>Set your location</span>
                        </span>}
                    </label>
                </div>
                <div className={`${style.searchBtn}`} >
                    <button className=" flex items-center justify-center space-x-3">
                        <FiSearch />
                        <span>Search</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
