import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WeatherData } from '../types/weatherTypes';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
    return response.data as WeatherData;
  }
);
