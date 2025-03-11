import { Sun, Moon, Cloud, CloudRain, Snowflake, Zap } from "lucide-react";

const WeatherCard = ({ weatherData  }) => {
  const { main, weather } = weatherData || [];

  const getWeatherIcon = (condition,icon) => {
    const isNight = icon?.endsWith("n"); 

    switch (condition) {
      case "Clear":
        return isNight ? <Moon size={140} color="darkblue" /> : <Sun size={48} color="orange" />;
      case "Clouds":
        return <Cloud size={140} color="gray" />;
      case "Rain":
        return <CloudRain size={140} color="blue" />;
      case "Snow":
        return <Snowflake size={140} color="lightblue" />;
      case "Thunderstorm":
        return <Zap size={140} color="yellow" />;
      default:
        return <Cloud size={140} color="gray" />;
    }
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center rounded-lg shadow-xl w-full h-full bg-white p-6">
      {getWeatherIcon(weather?.[0]?.main,weather?.[0]?.icon)}
      <p className="text-2xl font-semibold">{main?.temp}°C</p>
      <p className="capitalize text-gray-700">{weather?.[0]?.description}</p>
    </div>
  );
};

export default WeatherCard;
