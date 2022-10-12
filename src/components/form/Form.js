import React from 'react';

const Form = () => {
  return (
    <>
      <div>
        <form>
          <input
            type='text'
            placeholder='country'
            name='country'
            onChange={{}}
          />
          <input type='text' placeholder='city' name='city' onChange={{}} />
        </form>
      </div>
    </>
  );
};

export default Form;
