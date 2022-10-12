import './mainpage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const MainPage = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const callApi = async () => {
    try {
      const data = await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q={city name},{country code}&appid=${apiKey}`
        )
        .then((res) => {
          console.log(res.data);
        });
    } catch (err) {
      console.log('err');
    }
  };
  callApi();

  return <div>main</div>;
};

export default MainPage;
