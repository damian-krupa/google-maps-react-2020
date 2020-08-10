import React from 'react';
import { func } from 'prop-types';

const Locate = ({ panTo }) => (
  <button
    type="button"
    className="locate"
    onClick={() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => null,
      );
    }}
  >
    <img src="/compass.svg" alt="compass" />
  </button>
);

Locate.propTypes = {
  panTo: func.isRequired,
};

export default Locate;
