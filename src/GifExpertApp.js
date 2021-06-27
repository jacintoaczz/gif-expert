import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories = ["One Punch Man", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch Man"]);

  // const handleAdd = () => {
  //   setCategories((cats) => [...cats, "HunterXHunter"]);
  // };

  return (
    <main className="container">
      <h2>Gif Expert App</h2>
      <hr />

      <AddCategory setCategories={setCategories} query={categories} />

      <ol>
        {categories.map((category) => {
          // No usamos el indice del elemento como 'key' dado que puede producir
          // ciertos comportamientos no deseados si se llegan a modificar los elementos.
          return <GifGrid category={category} key={category} />;
        })}
      </ol>
    </main>
  );
};
