const WeatherData = ({ weatherReport }) => {
  return (
    <>
      <div>
        <h2>{weatherReport.name}</h2>
        <p> Latitude: {weatherReport.coord.lat}</p>
        <p> Longitude: {weatherReport.coord.lon}</p>
      </div>
      <div>
        <p>Temp: {weatherReport.main.temp}K</p>
        <p>Humidity: {weatherReport.main.humidity} hPa</p>
        <p>Visibility: {weatherReport.visibility} meter</p>
        <p>Wind Speed: {weatherReport.wind.speed} m/sec</p>
      </div>
    </>
  );
};

export default WeatherData;
