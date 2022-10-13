import './weatherData.css';
const WeatherData = ({ weatherReport }) => {
  return (
    <>
      <div className='first-parameters'>
        <h2 className='city-name'>{weatherReport.name}</h2>
        <p className='city-para'> Latitude: {weatherReport.coord.lat}</p>
        <p className='city-para'> Longitude: {weatherReport.coord.lon}</p>
      </div>
      <div className='second-parameters'>
        <p className='city-para'>Temp: {weatherReport.main.temp}K</p>
        <p className='city-para'>Humidity: {weatherReport.main.humidity} hPa</p>
        <p className='city-para'>
          Visibility: {weatherReport.visibility} meter
        </p>
        <p className='city-para'>
          Wind Speed: {weatherReport.wind.speed} m/sec
        </p>
      </div>
    </>
  );
};

export default WeatherData;
