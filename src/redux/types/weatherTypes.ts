// types/weatherTypes.ts

export interface WeatherState {
  loading: boolean;
  weatherData: WeatherData | null;
  error: string | null;
}

export interface WeatherData {
  // Define the structure of weather data here
}
