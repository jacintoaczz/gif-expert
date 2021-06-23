import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  // const categories = ["One Punch Man", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   setCategories((cats) => [...cats, "HunterXHunter"]);
  // };

  return (
    <>
      <h2>Gif Expert App</h2>
      <hr />

      <AddCategory />

      <ol>
        {categories.map((category) => {
          // No usamos el indice del elemento como 'key' dado que puede producir
          // ciertos comportamientos no deseados si se llegan a modificar los elementos.
          return <li keu={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
