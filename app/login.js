document.getElementById("login").onclick = function() {
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    if(usernameInput.length <= 0 || passwordInput.length <= 0) {
        alert("please enter a username or password");
    }
    else {
        let loggedIn = loginFunction(usernameInput, passwordInput);    
        if(loggedIn === true) {
            window.location.href = "../index.html";
        }
        else {
            alert("username and password not found.");
        }
    } 
}

function loginFunction(username, password) {
    
    let isLoggedIn = false;
    let userData = JSON.parse(window.localStorage.getItem("userinfo"));
    for (let index = 0; index < userData.length; index++) {
        const currentUser = userData[index];
        if(username === currentUser.username && password === currentUser.password) {
            isLoggedIn = true;
            break;
        }
    }
    return isLoggedIn;
}