import React, { useEffect, useState } from "react";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  // Si no le añadimos dependencias al useEffect (es decir, el ultimo argumento como '[]')
  // solo se ejecutara el efecto una sola vez. Cuando se crea el componente.
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&api_key=Glm6NFYw1SuuZ7eFCqoSzlEmlpTjNiEc&limit=5`;

    const response = await fetch(searchUrl);
    const { data } = await response.json();

    // Le damos formato a la informacion que llega
    const gifs = data.map((image) => {
      return {
        id: image.id,
        title: image.title,
        url: image.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

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
