import { useState } from "react";
function Country({ countrys }) {
    const [visit, setVisit] = useState(false);
    const handleVisit = () => setVisit(!visit)
    const { name,flags} = countrys;
    return (
        <div className={`flex flex-col justify-center items-center border-2 border-gray-500 m-3 p-3 ${visit && "bg-black text-white"}`}>
            <img src={flags.png} alt="" />
            <h1>Name : {name.common}</h1>
            <button  onClick={handleVisit} className={`bg-blue-500 px-3 py-2 rounded-xl my-3 text-white ${visit && "bg-red-500"}`}>{visit ? "Visited" : "Visit"}</button>
            {
                visit ? <p>I have already visit this country</p> : <p>I am excited to visit this country</p>
            }
        </div>
    )
}
export default Country;