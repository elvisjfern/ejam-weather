// @flow
import {
  Action,
  FETCH_WEATHER_DATA,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR
} from "./types";

export const fetchWeatherData = (cityId: number): Action => ({
  type:   FETCH_WEATHER_DATA,
  payload: cityId,
});

export const weatherDataSuccess = (weatherData: {[key: string]: unknown}): Action => ({
  type:   FETCH_WEATHER_DATA_SUCCESS,
  payload: weatherData
});

export const weatherDataError = (error: string): Action => ({
  type:   FETCH_WEATHER_DATA_ERROR,
  payload: error
});