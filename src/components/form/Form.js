import React from 'react';

const Form = ({ lat, lon, handleChange }) => {
  return (
    <>
      <div>
        <form>
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
      </div>
    </>
  );
};

export default Form;
