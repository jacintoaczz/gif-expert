import React from "react";

export const GifCard = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={`gif_resource_${id}`} className="gif" />
      <section className="card__body">
        <h4>{title}</h4>
      </section>
    </div>
  );
};
