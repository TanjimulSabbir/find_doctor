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
        <div className="container mx-auto pb-10">
            {/* <img src={banner} alt="" srcSet="" /> */}

            <form className="flex items-center space-x-4" onSubmit={handleFormSubmit}>
                <div className="relative w-full">
                    <input type="text" name="doctor" className={`${style.inputBox}`} onChange={handleInputChange} />
                    {!inputText["doctor"] && <span className="absolute top-4 left-4 flex space-x-2 items-center">
                        <FiSearch />
                        <span>ex, Doctor, Hospital</span>
                    </span>}
                </div>
                <div className="relative w-full">
                    <input type="text" name="surgeon" className={`${style.inputBox}`} onChange={handleInputChange} />
                    <span className="absolute top-4 left-4 flex space-x-2 items-center">
                        <FiSearch />
                        <span>ex, Surgeon, Cardiologist</span>
                    </span>
                </div>
                <div className="relative w-full">
                    <input type="text" name="location" className={`${style.inputBox}`} onChange={handleInputChange} />
                    <span className="absolute top-4 left-4 flex space-x-2 items-center">
                        <BiSolidLocationPlus />
                        <span>Set your location</span>
                    </span>
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
