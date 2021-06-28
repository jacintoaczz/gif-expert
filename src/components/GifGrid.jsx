import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && (
        <h4 className="animate__animated animate__flash">Cargando gifs...</h4>
      )}

      <div className="gifs-container">
        {images.map((image) => {
          // Usando el {...image} es otra forma de enviar props.
          return <GifCard key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
