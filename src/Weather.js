export default async function getWeather(name) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=df142d1a2f8c446f95c211531231708&q=${name}`,
    { mode: 'cors' }
  );
  const data = await response.json();
  return data;
}
