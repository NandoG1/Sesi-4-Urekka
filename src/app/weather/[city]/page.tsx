import React from 'react';
import { notFound } from 'next/navigation';
import WeatherCard from '@/app/components/WeatherCard';
import SearchBar from '@/app/components/SearchBar';
import { getWeatherData } from '@/lib/weatherApi';
import { WeatherData, WeatherError } from '@/types/weather';

interface WeatherPageProps {
  params: {
    city: string;
  };
}

async function WeatherPage({ params }: WeatherPageProps) {
  const { city } = params;
  const decodedCity = decodeURIComponent(city);

  try {
    const weatherData = await getWeatherData(decodedCity);

    if ('error' in weatherData) {
      const error = weatherData as WeatherError;
      return (
        <main className="container mx-auto px-4 py-16">
          <SearchBar />
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
              <h2 className="font-bold text-lg mb-2">Error</h2>
              <p>{error.error.info}</p>
            </div>
          </div>
        </main>
      );
    }

    const validWeatherData = weatherData as WeatherData;

    return (
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Weather Information
          </h1>
        </div>
        
        <SearchBar />
        <WeatherCard weatherData={validWeatherData} />
      </main>
    );
  }
  catch (error) {
    return (
      <main className="container mx-auto px-4 py-16">
        <SearchBar />
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
            <h2 className="font-bold text-lg mb-2">Error</h2>
            <p>Failed to fetch weather data. Please try again.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default WeatherPage;