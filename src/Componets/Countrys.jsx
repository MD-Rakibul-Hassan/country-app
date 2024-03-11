import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";
const Countrys = () => {
    const [countrys, setCountrys] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
        const filterCountres = countrys.filter(names => names.name.common.toLowerCase().includes(search))
        setCountrys(filterCountres);
    }
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountrys(data))
    },[])
    
    const handleVisitedCountrys = (country) => {
        const setCountry = [...visitedCountry, country];
        setVisitedCountry(setCountry)
    }
    return (
        <div>
            <h1 className="text-5xl text-center my-10 ">country : {countrys.length}</h1>
            <h1 className="text-3xl font-bold ml-10">Visited Countrys : {visitedCountry.length}</h1>
            <div className="p-10 ml-10 ">
                <ol style={{listStyleType:"circle"}}>
                    {
                        visitedCountry.map(visited => <li>{visited.name.common}</li>)
                    }
                </ol>
            </div>

            <div className="flex flex-col justify-center items-center my-3">
                <input type="text" className="border-2 border-neutral-700 p-5 rounded-xl lg:w-96" onChange={handleChange} value={search} placeholder="Search your country" />
            </div>

            <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
                {
                    countrys.map(country => (<Country
                        countrys={country}
                        key={country.name.common}
                        handleVisitedCountrys = {handleVisitedCountrys}
                    />))
                }
            </div>
            
        </div>
    )
}
export default Countrys;