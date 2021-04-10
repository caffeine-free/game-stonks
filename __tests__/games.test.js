const createGames = require("../src/assets/js/games");

test("teste do método createGames", () =>{
    const expected = [{
        name: "thegame", 
        price: "100", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        id: "1"
    }];

    expect(createGames("thegame", "100", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "1")).toEqual(expect.objectContaining(expected));
})