import React from "react";
import Nav from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";
import LocationGridContainer from "../components/locationGridContainer/locationGridContainer";

const Accueil: React.FC = () => {
  return (
    <>
      <Nav />
      <Banner
        imageUrl="./src/assets/banner_home.png"
        altText="banner"
        bannerText="Chez vous, partout et ailleurs"
      />
      <LocationGridContainer />
      <Footer />
    </>
  );
};

export default Accueil;
