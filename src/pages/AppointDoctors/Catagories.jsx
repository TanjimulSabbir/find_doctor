import { setInnerCategory } from "../../Redux/Features/filterSlice";
import { CatagoriesData } from "../../Tools/DataContainer"
import { useDispatch, useSelector } from "react-redux"

export default function Catagories() {
    const { innerCategory } = useSelector(state => state.filteredDoctor.searchedText)
    const dispatch = useDispatch();

    return (
        <div className="leftSlider w-full max-w-[60%] mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 items-center justify-center mt-5">
            {CatagoriesData.map(item => (
                <img
                    className={`transition transform duration-500 hover:scale-110 cursor-pointer ${innerCategory === item.title && "border-2 border-green-600 scale-110 rounded"}`}

                    onClick={() => dispatch(setInnerCategory(innerCategory === item.title ? "" : item.title))}
                    key={item.title}
                    src={item.url}
                    alt={item.title}
                    title={item.title}
                />
            ))}

        </div>
    )
}
