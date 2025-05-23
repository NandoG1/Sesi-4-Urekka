import axios from 'axios';
import { WeatherData, WeatherError } from '@/types/weather';

const WEATHERSTACK_API_KEY = process.env.API_KEY_WEATHER; // ganti apinya
const BASE_URL = 'http://api.weatherstack.com/current';

export async function getWeatherData(city: string): Promise<WeatherData | WeatherError> {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        access_key: WEATHERSTACK_API_KEY,
        query: city,
        units: 'm'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}