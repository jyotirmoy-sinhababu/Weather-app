import './mainpage.css';
import { useState, useEffect } from 'react';

const MainPage = () => {
  const api = {
    key: process.env.REACT_WEATHER_API_KEY,
    url: 'https://api.openweathermap.org/data/2.5/',
  };

  const [apiData, setApiData] = useState('');

  useEffect(() => {
    Axios.get(api.url);
  });

  return <div></div>;
};

export default MainPage;
