const insertGameCart = require("../src/assets/js/cart");

test("teste do método insertGameCart", () =>{
    const expected = [{
        id: "1",
        img: "img",
        name: "cart",
        price: "100",
        description: "lorem ipsum"
    }]
    expect(insertGameCart("1", "img", "cart", "100", "lorem ipsum")).toEqual(expect.objectContaining(expected));
})