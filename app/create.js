document.getElementById("createaccount").onclick = function() {
    let newusernameInput = document.getElementById("newusername").value;
    let newpasswordInput = document.getElementById("newpassword").value;
    let confirmpasswordInput = document.getElementById("confirmpassword").value;
    if(newusernameInput.length <= 0 || newpasswordInput.length <= 0 || confirmpasswordInput.length <= 0) {
        alert("please enter a username or password");
    }
    else {
        if(newpasswordInput !== confirmpasswordInput) {
            alert("password do not match");
        }
        else {
            createAccount(newusernameInput, newpasswordInput);
        }
    } 
}

function createAccount(username, password) {
    let newUser = {
        username: username,
        password: password
    }
    
    let users = JSON.parse(window.localStorage.getItem("userinfo"));
    users.push(newUser);
    window.localStorage.setItem("userinfo", JSON.stringify(users));
    alert(username + " has been created ");
    console.log(window.localStorage);
}