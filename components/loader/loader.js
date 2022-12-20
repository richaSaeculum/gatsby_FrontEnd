import React from 'react';

const Loader = ({ showLoader }) => {
  return (
    <div
      id='globalSpinner'
      style={{ display: `${showLoader ? "block" : "none"}` }}
      className='loader-container'>
      <span class="loader"></span>
    </div>
  )
}

export default Loader;