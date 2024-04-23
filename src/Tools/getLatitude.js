export const getLatitude = async (location = "Dhaka") => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

getLatitude();