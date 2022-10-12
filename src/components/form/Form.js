import axios from 'axios';
import React from 'react';
import './form.css';

const Form = ({ lat, lon, handleChange, apiKey }) => {
  const handleSubmit = (e) => {
    try {
      axios
        .get(
          `https://api.openweathermap.org/data/3.0/onecall?lat= ${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`
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
            handleSubmit(e);
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
        </form>
        <button type='submit'>search</button>
      </div>
    </>
  );
};

export default Form;
