import React from "react";
import { Snowflake, Thermometer, Flame, Wind, Droplet, Gauge, Eye } from "lucide-react";

const getWindDirection = (degree) => {
  if (degree > 337.5 || degree <= 22.5) return "N";
  if (degree > 22.5 && degree <= 67.5) return "NE";
  if (degree > 67.5 && degree <= 112.5) return "E";
  if (degree > 112.5 && degree <= 157.5) return "SE";
  if (degree > 157.5 && degree <= 202.5) return "S";
  if (degree > 202.5 && degree <= 247.5) return "SW";
  if (degree > 247.5 && degree <= 292.5) return "W";
  if (degree > 292.5 && degree <= 337.5) return "NW";
};

const WeatherCardDetail = ({ type, value }) => {
  let icon, label, unit = "";

  switch (type) {
    case "feels_like":
      label = "Sensación térmica";
      unit = "°C";
      icon = value <= 10 ? <Snowflake size={32} color="lightblue" /> :
             value <= 25 ? <Thermometer size={32} color="orange" /> :
                           <Flame size={32} color="red" />;
      break;

    case "humidity":
      label = "Humedad";
      icon = <Droplet size={32} color="blue" />;
      unit = "%";
      break;

    case "pressure":
      label = "Presión";
      icon = <Gauge size={32} color="gray" />;
      unit = "hPa";
      break;

    case "wind_speed":
      label = "Viento";
      icon = <Wind size={32} color="green" />;
      unit = "m/s";
      break;

    case "visibility":
      label = "Visibilidad";
      icon = <Eye size={32} color="purple" />;
      unit = "km";
      value = value / 1000; 
      break;

    case "wind_direction":
      label = "Dirección del viento";
      icon = <Wind size={32} color="teal" />;
      value = `${getWindDirection(value)} (${value}°)`;
      break;

    default:
      label = "Dato no disponible";
      icon = <Thermometer size={32} color="gray" />;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg flex items-center p-4 w-full">
      {icon}
      <div className="ml-3">
        <p className="text-lg font-semibold">{label}</p>
        <p className="text-xl">{value}{unit}</p>
      </div>
    </div>
  );
};

export default WeatherCardDetail;
