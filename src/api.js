async function apiCall() {
  let key = "";
  let location = "Slemani";
  let url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no`;

  const response = await fetch(url);
  if (response.status !== 200) {
    return false;
  }

  const data = await response.json();
  return data;
}

export default apiCall;
