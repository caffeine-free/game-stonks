const data = []

function post() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const id = Math.random().toString(32).substr(2, 9);

    createGames(name, price, description, id);
    alert('Game successfully registered!');

    return data;
}

function createGames(name, price, description, id){
    data.push({ id, name, price, description })
    return data;
}
