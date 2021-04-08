const createUser = require("../src/assets/js/users");

test("teste do método createUser", () =>{
    const expected = ["usuario1", "usuario@usuario.com", "senha1", "senha1", "1"];
    expect(createUser("usuario1", "usuario@usuario.com", "senha1", "senha1", "1")).toEqual(expect.not.objectContaining(expected));
})