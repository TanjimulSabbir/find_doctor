import toast from "react-hot-toast"
import { CatagoriesData } from "../../Tools/DataContainer"

export default function Catagories({ category, setCategory }) {
    return (
        <div className="leftSlider w-full max-w-[60%] mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 items-center justify-center mt-5">
            {CatagoriesData.map((item, index) => (
                <img
                    className={`${index % 2 == 0 ? "topSlider" : "downSlider"} transition transform duration-500 hover:scale-110 cursor-pointer ${category === item.title && "border-2 border-green-600 scale-110 rounded"}`}

                    onClick={() => setCategory(prev => prev === item.title ? "" : item.title)}
                    key={item.title}
                    src={item.url}
                    alt={item.title}
                    title={item.title}
                />
            ))}

        </div>
    )
}
