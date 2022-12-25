// free api key. steal as you like
export let apiKey = "74dd9c2c03d4438da6f184612221806";

// fetch functions

export const fetchForecast = (location) => {
	return fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`
	)
		.then((res) => res.json())
		.then((data) => organizeAPIData(data));
};

export const fetchLocations = async (searchFor) => {
	const res = await fetch(
		`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${searchFor}`
	);
	const data = await res.json();
	return data;
};

// other functions

// tidy the Data gotten from api
export const organizeAPIData = (data) => {
	// console.log(data);
	return {
		location: {
			country: data.location.country,
			region: data.location.region,
			name: data.location.name,
		},
		weather: [
			{
				day: "Today",
				weatherStatus: data.forecast.forecastday[0].day.condition.text,
				weatherIcon: data.forecast.forecastday[0].day.condition.icon,
				avgTemperature: data.forecast.forecastday[0].day.avgtemp_c,
				rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
				date: data.forecast.forecastday[0].date,
			},
			{
				day: "Tomorrow",
				weatherStatus: data.forecast.forecastday[1].day.condition.text,
				weatherIcon: data.forecast.forecastday[1].day.condition.icon,
				avgTemperature: data.forecast.forecastday[1].day.avgtemp_c,
				rainChance: data.forecast.forecastday[1].day.daily_chance_of_rain,
				cloudCoverage: data.forecast.forecastday[1].day.cloud,
				date: data.forecast.forecastday[1].date,
			},
			{
				day: "Overmorrow",
				weatherStatus: data.forecast.forecastday[2].day.condition.text,
				weatherIcon: data.forecast.forecastday[2].day.condition.icon,
				avgTemperature: data.forecast.forecastday[2].day.avgtemp_c,
				rainChance: data.forecast.forecastday[2].day.daily_chance_of_rain,
				cloudCoverage: data.forecast.forecastday[2].day.cloud,
				date: data.forecast.forecastday[2].date,
			},
		],
	};
};
