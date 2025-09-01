import React from "react";

interface BannerProps {
  imageUrl: string;
  altText: string;
  bannerText?: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, altText, bannerText }) => {
  return (
    <div className="banner-container">
      <img className="banner" src={imageUrl} alt={altText} />
      {bannerText && <p className="banner-text">{bannerText}</p>}
    </div>
  );
};

export default Banner;
