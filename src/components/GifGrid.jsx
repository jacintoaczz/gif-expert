import React, { useEffect } from "react";

export const GifGrid = ({ category }) => {
  // Si no le añadimos dependencias al useEffect (es decir, el ultimo argumento como '[]')
  // solo se ejecutara el efecto una sola vez. Cuando se crea el componente.
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async (query) => {
    query = "Rick and Morty";
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&api_key=Glm6NFYw1SuuZ7eFCqoSzlEmlpTjNiEc&limit=5`;

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

    console.log(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
