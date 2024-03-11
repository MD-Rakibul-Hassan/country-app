import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";
import { list } from "postcss";
const Countrys = () => {
    const [countrys, setCountrys] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);


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
                <ol style={{listStyleType:"number"}}>
                    {
                        visitedCountry.map(visited => <li>{visited.name.common}</li>)
                    }
                </ol>
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