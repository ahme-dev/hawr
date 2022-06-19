async function apiForecast(location = "Slemani") {
  // indeed, putting an api key on version control is very funny
  // but it is based on a free account,
  // and you might as well create your own free account
  let key = "74dd9c2c03d4438da6f184612221806";
  let url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no`;

  const response = await fetch(url);
  if (response.status !== 200) {
    return false;
  }

  const data = await response.json();
  return data;
}

export default apiForecast;
