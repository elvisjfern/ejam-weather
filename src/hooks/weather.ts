import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWeatherData, weatherDataSuccess, weatherDataError } from '../actions/weather';
import { RootState } from '../store';
import { Weather } from "../reducers/weather";
import { Action } from "../actions/types";
import  { fetchWeatherData as fetchWeatherDataAPI } from '../services/weather';

const useWeather: () => [Weather, (cityId: number) => Promise<Action | undefined>] = () => {
  const weather = useSelector<RootState>(state => state.weather) as Weather;
  // const { selectedCityId } = weather;
  const dispatch = useDispatch();
  const fetchWeatherDataCb = useCallback(async (cityId: number) => {
    try {
      if (!cityId) {
        return dispatch(weatherDataError('No city selected'));
      }
      
      // console.log(cityId, selectedCityId)
      // if(cityId === selectedCityId) {
      //   console.log('reached')
      //   return;
      // }

      dispatch(fetchWeatherData(cityId));
      const { data = {}} = await fetchWeatherDataAPI(cityId);
      dispatch(weatherDataSuccess(data));
    } catch (error) {
      dispatch(weatherDataError('Weather data could not fetched. Please try again'));
    }
  }, 
  [dispatch]);
  return [weather, fetchWeatherDataCb];
};

export default useWeather;
