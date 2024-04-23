import { getLatitude } from "../../Tools/getLatitude";

export default function HospitalMap({ latitude, longitude }) {
    const location = getLatitude()
    location.then(res => console.log(res))
    return (
        <div className="text-black bg-yellow-500 w-[40%] h-screen pl-5 rounded">
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3634.47157604264!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1713905867779!5m2!1sen!2sbd`}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
