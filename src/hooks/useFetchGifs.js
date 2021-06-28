import { useEffect, useState } from "react";
import { getGifs } from "../helpers/giphyCalls";

//
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // Si no le añadimos dependencias al useEffect (es decir, el ultimo argumento como '[]')
  // solo se ejecutara el efecto una sola vez. Cuando se crea el componente.
  // Los efectos no pueden ser asincronos.
  useEffect(() => {
    getGifs(category).then((gifs) =>
      setState({
        data: gifs,
        loading: false,
      })
    );
  }, [category]);

  return state;
};
