export default async function getWeather(name) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=df142d1a2f8c446f95c211531231708&q=${name}&days=7`,
      { mode: 'cors' }
    );

    if (response.status === 400) {
      return new Error('Location not found');
    }
    if (response.status !== 200) {
      return new Error('We are having some problem, Plese try agin later');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}
