import axios from 'axios';
import { useState } from 'react';
import WeatherData from '../weatherData/WeatherData';
import './form.css';

const FormComp = () => {
  const [place, setPlace] = useState('');

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
          handleSubmit(res.data[0].lat, res.data[0].lon);
          console.log(res.data[0].lat);
        });
    } catch (err) {
      console.log('err');
    }
  };

  const handleSubmit = (lat, lon) => {
    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        )
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            callApi();
          }}
        >
          <input
            type='text'
            placeholder='country'
            name='country'
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='city'
            name='city'
            onChange={handleChange}
          />
          <button type='submit'>search</button>
        </form>
      </div>
      <div>
        <WeatherData />
      </div>
    </>
  );
};

export default FormComp;
