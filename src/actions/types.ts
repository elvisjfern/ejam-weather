export type Action = {
  type: string;
  payload?: any;
};

export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';
export const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
export const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_ERROR';