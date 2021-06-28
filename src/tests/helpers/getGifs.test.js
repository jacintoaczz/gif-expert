import { getGifs } from "../../helpers/giphyCalls";

describe("Pruebas con getGifs", () => {
  test("Debe traer al menos 5 elementos.", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBeGreaterThanOrEqual(5);
  });

  test("Debe traer 0 elementos si no tiene ninguna categoria.", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
