import { shallow } from "enzyme";
import { GifCard } from "../../components/GifCard";

describe("Pruebas en el </Gifcard />", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const id = "elId";
    const title = "Un titulo";
    const url = "https://localhost:3000/una-imagen";

    const wrapper = shallow(<GifCard id={id} title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
