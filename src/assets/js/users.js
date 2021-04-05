const data = []

const post = () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const id = Math.random().toString(32).substr(2, 9);

    data.push({ id, username, email, password });
    alert('User successfully registered!');

    return data;
}
