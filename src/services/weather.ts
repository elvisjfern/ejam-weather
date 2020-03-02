import axios from "axios";

export const fetchWeatherData = async (cityId: number) => {
	try {
		const res = await axios.get(`api/weather/${cityId}`);
		// console.log(res.data);
    return res.data;
	} catch (error) {
		throw error;
	}
};
