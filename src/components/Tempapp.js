import React from 'react';
import {useState,useEffect} from 'react';

const Tempapp = ()=>{

    const [city , setCity]= useState("null");
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        const fetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d4401cce38f928ebf798845e7e882ccb`;
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(res.json)
            setCity(resJson.main)
        };
        fetchApi();
    }, [search])

    return (
        <>
        <div className="box">
            <div className="inputData">
                <input 
                type="search"
                value = {search}
                className="inputfeild"
                onChange={(event) =>{ setSearch(event.target.value) }}/>
            </div>


            {!city ? (
                <p>No Data Found</p>
            )  : (
                <div>
                <div className="info">
                <h1 className="location">
                <i className="fas fa-street-view"></i>{search}
                </h1>
                <h2 className="temp">
                    {city.temp}°Cel
                </h2>
                <h3 className="tempmin_max">Min :  {city.temp_min}°Cel | Max :  {city.temp_max}°Cel</h3>
            </div>

            <div className = "wave -one"></div>
            <div className = "wave -two"></div>
            <div className = "wave -three"></div>
            </div>           
            )}

            
        </div>
        </>
    )
}

export default Tempapp;
