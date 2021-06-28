import React from "react";
import PropTypes from "prop-types";

export const GifCard = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInLeft">
      <img src={url} alt={`${title}`} className="gif" />
      <section className="card__body">
        <h4>{title.toUpperCase()}</h4>
      </section>
    </div>
  );
};

GifCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
