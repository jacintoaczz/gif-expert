import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { Navbar } from "./components/Navbar";

export const GifExpertApp = () => {
  // const categories = ["One Punch Man", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch Man"]);

  // const handleAdd = () => {
  //   setCategories((cats) => [...cats, "HunterXHunter"]);
  // };

  return (
    <>
      <Navbar />
      <main className="container">
        <AddCategory setCategories={setCategories} />

        <ol>
          {categories.map((category) => {
            // No usamos el indice del elemento como 'key' dado que puede producir
            // ciertos comportamientos no deseados si se llegan a modificar los elementos.
            return <GifGrid category={category} key={category} />;
          })}
        </ol>
      </main>
    </>
  );
};
