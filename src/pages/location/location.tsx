import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Ajout de useNavigate
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
  const navigate = useNavigate(); // Ajout du hook
  const [property, setProperty] = useState<Property | null>(null);
  const [notFound, setNotFound] = useState(false); // Ajout de l'état

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.data || Object.keys(response.data).length === 0) {
          setNotFound(true);
        } else {
          setProperty(response.data);
        }
      })
      .catch(() => setNotFound(true)); // En cas d'erreur, on passe à notFound
  }, [id]);

  useEffect(() => {
    if (notFound) {
      navigate("/404", { replace: true }); // Redirection vers la page 404
    }
  }, [notFound, navigate]);

  if (!property && !notFound) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Nav />
      <div className="location-page">
        {property && (
          <>
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
              <Dropdown
                title="Description"
                description={property.description}
              />
              <Dropdown title="Équipements" description={property.equipments} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Location;
