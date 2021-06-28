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
      <div className="form-group">
        <input
          type="text"
          onChange={handleInputChange}
          autoFocus={true}
          required={true}
          placeholder={" "}
        />
        <label htmlFor="input" className="control-label">
          Categoría
        </label>
        <i className="bar"></i>
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
