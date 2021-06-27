export const getGifs = async (category) => {
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

  return gifs;
};
