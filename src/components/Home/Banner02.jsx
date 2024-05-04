import { FiSearch } from "react-icons/fi"
import banner from "../../assets/images/banner02.svg"
import { BiSolidLocationPlus } from "react-icons/bi"
import style from "../../style/navbar.module.css"
import { useState } from "react"
import LookingFor from "./LookingFor"
import { CgClose } from "react-icons/cg"

export default function Banner02() {
    const [inputText, setInputText] = useState({});
    const [search, setSearch] = useState(false)

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
        <div className="container mx-auto sm:px-10 mb-14">
            <div className="px-10 py-16 bg-white shadow-2xl z-50 rounded-md">
                {/* <img src={banner} alt="" srcSet="" /> */}

                <form className="grid items-center gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" onSubmit={handleFormSubmit}>
                    <div className="leftSlider relative w-full">
                        <input type="text" id="doctor" name="doctor" className={`${style.inputBox}`} onChange={handleInputChange} />
                        <label htmlFor="doctor">
                            {!inputText["doctor"] && <span className="absolute top-[15px] left-4 flex space-x-2 items-center opacity-70 cursor-pointer">
                                <FiSearch />
                                <span>ex, Doctor, Hospital</span>
                            </span>}
                        </label>
                    </div>
                    <div className="rightSlider relative w-full inputBoxContainter">
                        <input type="text" id="surgeon" name="surgeon" className={`${style.inputBox}`} onChange={handleInputChange} />
                        <label htmlFor="surgeon">
                            {!inputText["surgeon"] && <span className="absolute top-[15px] left-4 flex space-x-2 items-center opacity-70 cursor-pointer">
                                <FiSearch />
                                <span>ex, Surgeon, Cardiologist</span>
                            </span>}
                        </label>
                    </div>
                    <div className="rightSlider relative w-full">
                        <input type="text" id="location" name="location" className={`${style.inputBox}`} onChange={handleInputChange} />
                        <label htmlFor="location">
                            {!inputText["location"] && <span className="absolute top-[15px] left-4 flex space-x-2 items-center opacity-70 cursor-pointer">
                                <BiSolidLocationPlus />
                                <span>Set your location</span>
                            </span>}
                        </label>
                    </div>
                    <div onClick={() => setSearch(true)} className={`rightSlider ${style.searchBtn}`} >
                        <button className="flex items-center justify-center space-x-3">
                            <FiSearch />
                            <span>Search</span>
                        </button>
                    </div>
                </form>
                <LookingFor />
            </div>
            {/* Search Modal */}
            {search && <div className="rightSlider fixed h-screen w-screen bg-[#000000f3] inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center space-x-3">
                    <input type="text" placeholder="Search Doctor" className="py-3 px-7 border border-gray-300 rounded-lg w-full" />
                    <FiSearch className="absolute right-3 top-4 text-xl"/>
                </div>
                {/* Search Modal Close */}
                <button onClick={() => setSearch(false)} className="absolute top-3 right-5 text-white text-3xl">
                    <CgClose />
                </button>
            </div>}
        </div>
    )
}
