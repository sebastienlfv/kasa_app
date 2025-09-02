import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/navigation/navigation";
import Tag from "../../components/tag/tag";
import Dropdown from "../../components/dropdown/dropdown";
import Footer from "../../components/footer/footer";
import Slider from "../../components/slider/slider";
import "../../pages/location/location.scss";

interface Property {
  id: string;
  title: string;
  location: string;
  cover: string;
  tags: string[];
  pictures: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: number;
  description: string;
  equipments: string[];
}

const Location: React.FC = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        console.log("API property:", response.data);
        setProperty(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!property) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Nav />
      <div className="location-page">
        <Slider pictures={property.pictures} />
        <div className="location-info">
          <div className="location-details">
            <p className="location-title">{property.title}</p>
            <p className="location-city">{property.location}</p>
            <div className="location-tags">
              {property.tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="location-host">
            <div className="location-host-info">
              <div className="host-name">
                <p>{property.host.name}</p>
              </div>
              <img
                src={property.host.picture}
                alt="hostImg"
                className="host-img"
              />
            </div>
            <div className="location-stars">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < property.rating
                      ? "/src/assets/star-active.png"
                      : "/src/assets/star-inactive.png"
                  }
                  alt={i < property.rating ? "starActive" : "starInactive"}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="location-dropdowns">
          <Dropdown title="Description" description={property.description} />
          <Dropdown title="Équipements" description={property.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Location;
