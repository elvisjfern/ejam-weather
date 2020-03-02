import {
  FETCH_WEATHER_DATA,
  FETCH_WEATHER_DATA_SUCCESS,
  FETCH_WEATHER_DATA_ERROR,
  Action
} from "../actions/types";

export interface Weather {
  cities: Array<{id: number, name: string}>
  weatherData: null | {[key: string]: any};
  selectedCityId: null | number;
  fetching: boolean;
  error: string | null;
};

const initialState: Weather = {
  cities: [{
    "id": 5128638,
    "name": "New York",
  },
  {
    "id": 5332921,
    "name": "California",
  },
  {
    "id": 4736134,
    "name": "Texas City",
  },{
    "id": 4853799,
    "name": "Denver",
  }],
  weatherData: null,
  selectedCityId: null,
  fetching: false,
  error: null
};

export const weatherReducer = (
  state: Weather = initialState,
  action: Action
): Weather => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_WEATHER_DATA:
      return {
        ...state,
        fetching: true,
        selectedCityId: payload,
        error: null,
        weatherData: null,
      };

    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        weatherData: payload,
      };

    case FETCH_WEATHER_DATA_ERROR:
      return {
        ...state,
        fetching: false,
        weatherData: null,
        error: payload,
      };
    
    default:
      return state;
  }
}