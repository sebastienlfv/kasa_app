import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Property {
  id: string;
  title: string;
  location: string;
  cover: string;
}

const LocationCard: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/properties")
      .then((response) => {
        console.log("Réponse API:", response.data);
        setProperties(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="locationCards-wrapper">
      {properties.length > 0 ? (
        properties.map((property) => (
          <Link to={`/location/${property.id}`} key={property.id}>
            <div
              className="locationCard-container"
              style={{
                backgroundImage: `url(${property.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="location-text-bg"></div>
              <p className="location-text">{property.title}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="location-text">Chargement...</p>
      )}
    </div>
  );
};

export default LocationCard;
