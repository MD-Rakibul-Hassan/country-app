import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";
const Countrys = () => {
    const [countrys, setCountrys] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountrys(data))
    },[])
    return (
        <div>
            <h1 className="text-5xl text-center my-10">country : {countrys.length}</h1>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
                {
                    countrys.map(country => <Country countrys={country} key={country.name.common}/>)
                }
            </div>
            
        </div>
    )
}
export default Countrys;