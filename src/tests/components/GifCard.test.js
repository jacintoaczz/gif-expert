import { shallow } from "enzyme";
import { GifCard } from "../../components/GifCard";

describe("Pruebas en el </Gifcard />", () => {
  // Props del componente
  const id = "elId";
  const title = "Un titulo";
  const url = "https://localhost:3000/una-imagen";
  const wrapper = shallow(<GifCard id={id} title={title} url={url} />);

  test("Debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un h4 con el "title"', () => {
    const p = wrapper.find("h4");
    expect(p.text().trim()).toBe(title.toUpperCase());
  });

  test('Debe de tener una imagencon el "url", y con propiedad "alt" de los props.', () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test('Debe tener las clases para animar "animate__animated animate__fadeIn"', () => {
    const cardDiv = wrapper.find("div.card");
    const className = cardDiv.prop("className");
    expect(className.includes("animate__fadeInLeft")).toBe(true);
  });
});
