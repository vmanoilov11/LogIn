function maskPassword(){
    let password = document.getElementById('password').value;
    let hiddenPassword = "*".repeat(password.length);
    document.getElementById('password').value = hiddenPassword;
}
function checkEmail() {
    let email = document.getElementById('email').value;
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let errorTr = document.querySelector("tr.error");

    if (!regex.test(email)) {
        let errorMessage = "Invalid email!";
        
        if (!errorTr) {
            errorTr = document.createElement("tr");
            errorTr.className = "error";
            let td = document.createElement("td");
            td.colSpan = "2";
            errorTr.appendChild(td);

            document.querySelector("tbody").insertBefore(errorTr, document.querySelector("tr.button"));
        }
        

        if (errorTr.querySelector("td").innerHTML === "") {
            let td = errorTr.querySelector("td");
            td.innerHTML = errorMessage;
        }

        document.getElementById('sign-in').disabled = true;
    } else {
        if (errorTr) {
            errorTr.parentNode.removeChild(errorTr)
        }
        document.getElementById('sign-in').disabled = false
    }
}

function signIn() {
    let username = document.getElementById('username').value;
    let welcomeMessage = "Welcome, " + username;

    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    document.querySelector('.welcome td').innerText = welcomeMessage;

    document.querySelector('.username').style.display = 'none';
    document.querySelector('.email').style.display = 'none';
    document.querySelector('.password').style.display = 'none';

    document.getElementById('sign-in').style.display = 'none';
}
