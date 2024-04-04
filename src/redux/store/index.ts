import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData, WeatherState } from '../types/weatherTypes';
import { fetchWeather } from '../actions/weatherActions';

const initialState: WeatherState = {
  loading: false,
  weatherData: null,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default weatherSlice.reducer;
