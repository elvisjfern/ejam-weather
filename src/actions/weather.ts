// @flow
import {
  Action,
  FETCH_WEATHER_DATA,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR
} from "./types";

export const fetchWeatherData = (cityID: number): Action => ({
  type:   FETCH_WEATHER_DATA,
  payload: cityID,
});

export const weatherDataSuccess = (weatherData: {[key: string]: string}): Action => ({
  type:   FETCH_WEATHER_DATA_SUCCESS,
  payload: weatherData
});

export const weatherDataError = (error: Error): Action => ({
  type:   FETCH_WEATHER_DATA_ERROR,
  payload: error
});