const data = []

const post = () => {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const id = Math.random().toString(32).substr(2, 9);

    data.push({ id, name, price, description });
    alert('Game successfully registered!');

    return data;
}
