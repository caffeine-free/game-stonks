const data = []

const post = () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const id = Math.random().toString(32).substr(2, 9);

    createUser(username, email, password, id);
    alert('User successfully registered!');
    console.log(JSON.stringify(data))

    return data;
}

function createUser(username, email, password, id){
    data.push({ id, username, email, password });
    return data;
}

module.exports = createUser;