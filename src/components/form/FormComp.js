import axios from 'axios';
import { useState } from 'react';
import WeatherData from '../weatherData/WeatherData';
import './form.css';

const FormComp = () => {
  const [place, setPlace] = useState('');
  const [weatherReport, setWeatherReport] = useState('');

  const apiKey = 'f717ff242248a3b5708565b749b90eed';

  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const callApi = async () => {
    try {
      const data = await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q= ${place.city},${place.country}&appid=${apiKey}`
        )
        .then((res) => {
          debugger;
          handleSubmit(res.data[0].lat, res.data[0].lon);
          console.log(res.data[0].lat);
        });
    } catch (err) {
      console.log('err');
    }
  };

  const handleSubmit = (lat, lon) => {
    if (lat && lon) {
      try {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
          )
          .then((res) => {
            console.log(res.data);
            setWeatherReport(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div>
        {' '}
        <div className='form-cnt'>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              if (place) {
                callApi();
              }
            }}
          >
            <input
              className='form-inp'
              type='text'
              placeholder='country'
              name='country'
              onChange={handleChange}
            />
            <input
              className='form-inp'
              type='text'
              placeholder='city'
              name='city'
              onChange={handleChange}
            />
            <button className='btn' type='submit'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-search'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </button>
          </form>
        </div>
        <div className='weather-data-cnt'>
          {weatherReport ? (
            <WeatherData weatherReport={weatherReport} />
          ) : (
            <div className='alt-heading-cnt'>
              <h1 className='alt-heading'>Search by country & city name</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormComp;
