import React from "react";
import Nav from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Dropdown from "../../components/dropdown/dropdown";
import "../../pages/about/about.scss";

const About: React.FC = () => {
  return (
    <>
      <Nav />
      <Banner
        imageUrl="./src/assets/banner_about.png"
        altText="banner"
        bannerText=""
      />
      <div className="about-list">
        <Dropdown
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérfiées par nos équipes."
        />
        <Dropdown
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          description="La qualité du service est au coeurs de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />
        <Dropdown
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de véifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </>
  );
};

export default About;
