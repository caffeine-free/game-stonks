const data = []

function post() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const id = Math.random().toString(32).substr(2, 9);

    if(createGames(name, price, description, id)) {
        alert('Game successfully registered!');
        return data;
    }
}

function createGames(name, price, description, id){
    if(name == "" || name.lenght < 6) {
        alert("Name should be at least 6 characters.");
        return false;
    }

    if(price == "" ) {
        alert("Please provide a price for the game.");
        return false;
    }

    if(description == "" || description.lenght < 50) {
        alert("Description should be at least 50 characters.");
        return false;
    }
    
    data.push({ id, name, price, description })
    return data;
}

module.exports = createGames;