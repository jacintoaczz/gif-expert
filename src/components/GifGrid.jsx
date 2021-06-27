import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/giphyCalls";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  // Si no le añadimos dependencias al useEffect (es decir, el ultimo argumento como '[]')
  // solo se ejecutara el efecto una sola vez. Cuando se crea el componente.
  useEffect(() => {
    getGifs(category).then((gifs) => setImages(gifs));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="gifs-container">
        {images.map((image) => {
          // Usando el {...image} es otra forma de enviar props.
          return <GifCard key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
