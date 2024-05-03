import { useState } from "react";

// await can only be used an inside async function
const PromiseComponent = () => {
    const [searchText, setSearchText] = useState("");

    const debounce = (func, delay) => {
        let timeoutId;

        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const handleInput = (event) => {
        const value = event.target.value;
        debouning(value)
    };

    const handleSearch = (data) => {
        setSearchText(data);
    };
    const debouning = debounce(handleSearch, 500);
    
    console.log(searchText);

    return (
        <div className="text-black">
            <h1>Hello</h1>
            <input onChange={(e) => handleInput(e)} placeholder="Write here" />
            <p>{searchText}</p>
        </div>
    );
};

export default PromiseComponent;
