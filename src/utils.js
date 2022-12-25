// free api key. steal as you like
export let apiKey = "74dd9c2c03d4438da6f184612221806";

export async function apiLocation(location = "Slemani") {
	let url = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${location}`;

	const response = await fetch(url);
	if (response.status !== 200) {
		return false;
	}

	const data = await response.json();
	return data;
}

// Tidy the Data gotten from api
export const organizeAPIData = (data) => {
	console.log(data);
	return {
		location: {
			country: data.location.country,
			region: data.location.region,
			name: data.location.name,
		},
		weather: [
			{
				weatherStatus: data.forecast.forecastday[0].day.condition.text,
				weatherIcon: data.forecast.forecastday[0].day.condition.icon,
				avgTemperature: data.forecast.forecastday[0].day.avgtemp_c,
				rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
				date: data.forecast.forecastday[0].date,
			},
			{
				weatherStatus: data.forecast.forecastday[1].day.condition.text,
				weatherIcon: data.forecast.forecastday[1].day.condition.icon,
				avgTemperature: data.forecast.forecastday[1].day.avgtemp_c,
				rainChance: data.forecast.forecastday[1].day.daily_chance_of_rain,
				cloudCoverage: data.forecast.forecastday[1].day.cloud,
				date: data.forecast.forecastday[1].date,
			},
			{
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
