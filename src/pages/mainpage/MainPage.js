import './mainpage.css';
import Form from '../../components/form/Form';
import axios from 'axios';

import { useState, useEffect } from 'react';

const MainPage = () => {
  const apiKey = 'f717ff242248a3b5708565b749b90eed';

  const [locationLat, setLocationLat] = useState('');
  const [locationLon, setLocationLon] = useState('');

  const [onChange, setOnChange] = useState('');

  const handleChange = (e) => {
    setOnChange({ ...onChange, [e.target.name]: e.target.value });
  };

  const callApi = async () => {
    try {
      const data = await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q={london},{england}&appid=${apiKey}`
        )
        .then((res) => {
          setLocationLat(res.data.lat);
          setLocationLon(res.data.lon);
          console.log(res.data);
        });
    } catch (err) {
      console.log('err');
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <Form lat={locationLat} lon={locationLon} handleChange={handleChange} />
    </div>
  );
};

export default MainPage;
