import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  // Ciclo de vida de las pruebas
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe renderizar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar el valor de la caja de texto.", () => {
    const input = wrapper.find("input");
    // Simulamos el parametro 'e' que se le envia a la funcion 'handleInputChange = (e) => {...}' del
    // componente.
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
  });

  test("NO debe postear la informacion en el submit.", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe llamer el "setCategories" y limpiar el valor del input.', () => {
    // 1. Simular el inputChange
    const value = "Hola mundo";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });

    // 2. Simular el submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // 3. setCategories debe haberse llamado
    expect(setCategories).toHaveBeenCalled();

    // 4. El 'value' del input debe estar vacio.
    expect(input.prop("value")).toBe("");
  });
});
