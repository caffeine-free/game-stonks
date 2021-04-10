const createUser = require("../src/assets/js/users");

test("teste do método createUser", () =>{
    const expected = [{
        id: "1",
        username: "usuario1",
        email: "usuario@usuario.com",
        password: "senha1"
    }]
    expect(createUser("usuario1", "usuario@usuario.com", "senha1", "senha1", "1")).toEqual(expect.objectContaining(expected));
})