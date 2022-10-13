const WeatherData = ({ weatherReport }) => {
  return (
    <>
      <div>
        <h2>{weatherReport.name}</h2>
        <p> Latitude: {weatherReport.coord.lat}</p>
        <p> Longitude: {weatherReport.coord.lon}</p>
      </div>
      <div>
        <h3>Weather Report</h3>
        <p>Temp: {weatherReport.main.temp}K</p>
      </div>
    </>
  );
};

export default WeatherData;
