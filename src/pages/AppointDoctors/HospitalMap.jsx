import { useState, useEffect } from "react";

export default function HospitalMap({location="Dhaka"}) {
    const [mapInfo, setMapInfo] = useState({});

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`);
                const data = await response.json();
                setMapInfo({ lat: data[0]?.lat, lon: data[0]?.lon });
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();
    }, []);
    console.log(mapInfo)

    return (
        <div className="w-[40%] h-screen pl-5 rounded transition duration-300 opacity-100">
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3634.47157604264!2d${mapInfo?.lon}!3d${mapInfo?.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713905867779`}
                width="100%"
                height="100%"
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="fullscreen; zoom"
            ></iframe>

        </div>
    );
}
