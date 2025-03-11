import React, { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'
import axios from 'axios'
import WeatherCardDetail from './components/WeatherCardDetail'

const Weather = () => {

  const [city, setCity] = useState("Chiclayo")
  const [weatherData, setWeatherData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
      setWeatherData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData()
  }
  useEffect(() => {
    fetchData()
  }, [])

  const currentDate = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className='bg-gray-100 min-h-screen w-full p-10'>
      <div className='flex flex-col mx-auto justify-center items-center w-full sm:w-5/6'>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full mt-4 gap-2">
          <WeatherCard weatherData={weatherData} />
          <div className="grid grid-cols-2 gap-2">
            <div className='col-span-2'>
              <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">{weatherData?.name}, {currentDate}</h2>
              <form onSubmit={handleSubmit} className='flex flex-row mx-auto items-center justify-center w-full' action="">
                <input type="text" className='bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  onChange={(e) => setCity(e.target.value)} />
                <button className='bg-blue-400 p-2.5 ms-2 w-56 rounded-lg text-white hover:cursor-pointer'>Buscar</button>
              </form>
            </div>
            <WeatherCardDetail type="feels_like" value={weatherData?.main.feels_like} />
            <WeatherCardDetail type="humidity" value={weatherData?.main.humidity} />
            <WeatherCardDetail type="pressure" value={weatherData?.main.pressure} />
            <WeatherCardDetail type="wind_speed" value={weatherData?.wind.speed} />
            <WeatherCardDetail type="visibility" value={weatherData?.visibility} />
            <WeatherCardDetail type="wind_direction" value={weatherData?.wind.deg} />
          </div>
        </div>

      </div>
    </div >
  )
}

export default Weather
