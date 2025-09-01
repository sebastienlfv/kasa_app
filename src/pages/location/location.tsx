import React from 'react';
import Nav from '../../components/navigation/navigation';
import '../../pages/location/location.scss';

const Location: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="location-page">
        <img src="src/assets/banner.png" alt="location-img" className="location-img" />
        <div>
          <p>Cozy loft on the Canal Saint-Martin</p>
          <p>Paris, Île-de-France</p>
          <div className='location-tags'>
            <span className='location-tag-item'>Cozy</span>
            <span className='location-tag-item'>Canal</span>
            <span className='location-tag-item'>Paris 10</span>
          </div>
        </div>
        <div>
          <div className='location-host-info'>
            <img src="src/assets/logo_orange.png" alt="hostImg" className="host-img" />
            <p className='host-firstname'>Alexandre</p>
            <p className='host-lastname'>Dumas</p>
          </div>
          <div className='location-stars'>
            <img src="src/assets/star-active.png" alt="starActive" />
            <img src="src/assets/star-active.png" alt="starActive" />
            <img src="src/assets/star-active.png" alt="starActive" />
            <img src="src/assets/star-inactive.png" alt="starInactive" />
            <img src="src/assets/star-inactive.png" alt="starInactive" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
