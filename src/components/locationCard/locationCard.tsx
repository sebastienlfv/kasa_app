import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Property {
  title: string;
  location: string;
  cover: string;
}

const LocationCard: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/properties')
      .then(response => {
        console.log('Réponse API:', response.data);
        setProperties(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="locationCards-wrapper">
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <div
            key={index}
            className="locationCard-container"
            style={{
              backgroundImage: `url(${property.cover})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <p className="location-text">{property.title}</p>
          </div>
        ))
      ) : (
        <p className="location-text">Chargement...</p>
      )}
    </div>
  );
};

export default LocationCard;