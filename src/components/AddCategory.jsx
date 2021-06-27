import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  // Deberiamos darle un valor inicial al state, dado que, de no hacerlo, el state
  // tendra el valor de 'undefined', y esto nos maracara un error en la consola.
  const [inputValue, setInputValue] = useState("Ingrese una busqueda...");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={inputValue}
        onChange={handleInputChange}
        autoFocus={true}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
