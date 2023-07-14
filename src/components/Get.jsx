import React, { useState, useEffect } from 'react';
import axios from 'axios';
import myImage from '../Weather App/ho.jpg';

const Get = () => {
    const [city, setCity] = useState('');
    const [country, setcountry] = useState('');
    const [name, setname] = useState("Lagos, NG");
    const [humidity, sethumidity] = useState("50%");
    const [lon, setlon] = useState("3.75");
    const [lat, setlat] = useState("6.5833");
    const [descption, setdescption] = useState("overcast clouds");
    const [pressure, setpressure] = useState("1014 hPa");
    const [min, setmin] = useState("29.79 °C");
    const [max, setmax] = useState("29.79 °C");
    const [feel, setfeel] = useState('30');

    const API_KEY = '832d5837907aaaa710797ffb7b1672fc';

    const fetchWeatherData = () => {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        axios.get(endpoint)
            .then((response) => {
                setcountry(`${response.data.sys.country}`)
                setname(`${response.data.name}, `)
                sethumidity(`${response.data.main.humidity}%`)
                setlat(`${response.data.coord.lat}`)
                setlon(`${response.data.coord.lon}`)
                setdescption(`${response.data.weather[0].description}`)
                setmin(`${response.data.main.temp_max} ℃`)
                setmax(`${response.data.main.temp_max} ℃`)
                setpressure(`${response.data.main.pressure}hpa`)
                setfeel(Math.round(response.data.main.feels_like))
                console.log(response.data.main.pressure);
                console.log(response.data);
                console.log(feel);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    };

    useEffect(() => {
        console.log(feel);
        console.log(feel);
    }, []);

    // if(feel){
    //     console.log(feel);
    // }else{
    //     console.log("Nothing Is here");
    // }

    // feel? console.log(feel): console.log("Nothing Is Here");

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    return (
        <>
          
            <img src={myImage} alt="" className='h-[100vh] w-[100%] absolute' />
            <div className='flex bg-transparent relative'>
                <div className='w-3/5 mt-20 mx-auto'>
                    <form onSubmit={handleSubmit} className='mx-5'>
                        <div class="relative mx-auto mb-4 flex mb-20">
                            <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city" required className="w-3/5 bg-white rounded border-none bg-transparent ring-2 border-gray-300 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none font-base text-lg focus:text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button type="submit" className='inline-flex text-white bg-indigo-500 border-0 py- p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold '>Get Weather</button>
                        </div>
                        <div className='text-white pt-40'>
                            <div className="font-semibold text-8xl">{`${feel ? `${feel}℃` : ""}`}</div>
                            {/* <div className={`font-semibold ${feel? "": "hidden"} text-4xl`}>{feel}</div> */}
                            <div className='py-4 text-3xl'>{name} <span>{country}</span></div>
                            <div className='font-medium text-xl'>{descption} <span>❄🌬🌀🌈🌂☂🌊</span></div>
                        </div>
                    </form>
                </div>
                <div className='border border-gray-300 border-2 rounded-xl w-2/6 h-screen float-right pt px-10 bg-gray-950 opacity-60 sh text-white  shadow-2xl shadow-gray-500'>
                    <div className='font-bold my-12 text-xl'>Weather Details</div>
                    <div className='flex '>
                        <div className='w-2/3 py-3 font-bold text-lg opacity-60'>Location</div>
                        <div className='w-1/3 py-3 font-medium text-md opacity-100'>{name} <span>{country}</span></div>
                    </div>
                    <div className='flex '>
                        <div className='w-2/3 py-3 font-bold text-lg opacity-60'>Description</div>
                        <div className='w-1/3 py-3 font-medium text-md'>{descption}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-2/3 py-3 font-bold text-lg opacity-60'>Pressure</div>
                        <div className='w-1/3 py-3 font-medium text-md'>{pressure}</div>
                    </div>
                    <div className='flex '>
                        <div className='w-2/3 py-3 font-bold text-lg opacity-60'>Humidity</div>
                        <div className='w-1/3 py-3 font-medium text-md'>{humidity}</div>
                    </div>
                    <hr className='my-7' />
                    <div className='flex '>
                        <div className='w-2/3 py-3 font-bold text-lg opacity-60'>Max</div>
                        <div className='w-1/3 py-3 font-medium text-md'>{max}</div>
                    </div>
                    <div className='flex '>
                        <div className='w-2/3 py-3 font-bold text-lg opacity-60'>Min</div>
                        <div className='w-1/3 py-3 font-medium text-md'>{min}</div>
                    </div>
                    <div className='flex'>
                        <div className='w-2/3 py-3 font-bold text-lg opacity-60'>lat</div>
                        <div className='w-1/3 py-3 font-medium text-md'>{lat}</div>
                    </div>
                    <div className='flex '>
                        <div className='w-2/3 py-3 font-bold text-lg opacity-60'>lon</div>
                        <div className='w-1/3 py-3 font-medium text-md'>{lon}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Get;
