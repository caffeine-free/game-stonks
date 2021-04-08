const data = []

function post() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password_confirm = document.getElementById("password_confirm").value;
    const id = Math.random().toString(32).substr(2, 9);

    if(createUser(username, email, password, password_confirm, id)){
        alert('User successfully registered!');
        return data;
    }
}

function createUser(username, email, password, password_confirm, id){
    let er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    if(username == "" || username.lenght < 6) {
        alert("Username should be at least 6 characters.");
        return false;
    }

    if(email == "" || !er.test(email)) {
        alert("Email field incorrectly filled.");
        return false;
    }

    if(password == "" || password.lenght < 4) {
        alert("Password should be at least 4 characters.");
        return false;
    }

    if(password_confirm != password){
        alert("Password confirm doesn't match password.");
        return false;
    }

    data.push({ id, username, email, password });

    return data;
}


module.exports = createUser;