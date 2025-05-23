import React from 'react';
import { WeatherData } from '@/types/weather';

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {location.name}
        </h1>
        <p className="text-gray-600">
          {location.region}, {location.country}
        </p>
        <p className="text-sm text-gray-500">
          {new Date(location.localtime).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-4">
          <img src={current.weather_icons[0]} alt={current.weather_descriptions[0]} className="w-20 h-20 bg-white"/>
        </div>
        <div className="text-6xl font-light text-gray-800 mb-2">
          {current.temperature}°
        </div>
        <p className="text-xl text-gray-600 capitalize">
          {current.weather_descriptions[0]}
        </p>
        <p className="text-gray-500">
          Feels like {current.feelslike}°
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm mb-1">Wind Speed</p>
          <p className="text-xl font-semibold text-gray-800">
            {current.wind_speed} km/h
          </p>
          <p className="text-gray-500 text-xs">{current.wind_dir}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm mb-1">Humidity</p>
          <p className="text-xl font-semibold text-gray-800">
            {current.humidity}%
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm mb-1">Pressure</p>
          <p className="text-xl font-semibold text-gray-800">
            {current.pressure} mb
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm mb-1">UV Index</p>
          <p className="text-xl font-semibold text-gray-800">
            {current.uv_index}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;