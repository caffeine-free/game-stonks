const createGames = require("../src/assets/js/games");

test("teste do método createGames", () =>{
    const expected = ["nome1", "preço1", "descricao1", "1"];
    expect(createGames("nome1", "preço1", "descricao1", "1")).toEqual(expect.not.objectContaining(expected));
})