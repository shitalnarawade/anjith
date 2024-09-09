import React from 'react';

const Banner = ({image,title,description}) => {
  return (
    <div
      className="banner-container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          `url(${image})`,
      }}
    >
      <div className="overlay">
        <div className="content-banner text-center container">
          <h1 className="title">{title}</h1>
          <p className="description text-justify">
            {description}
          </p>
          <a href="#learn-more" className="btn btn-primary mt-3">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;