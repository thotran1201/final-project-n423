const user = {
    username: "fashionpolicesoic",
    password: "youreunderarrest"
}

// window.localStorage.setItem("userinfo", JSON.stringify([user]));

let users = JSON.parse(window.localStorage.getItem("userinfo")) || [user];

// if (window.localStorage.getItem("userinfo") !== undefined) {
//     console.log("test");
//     users = JSON.parse(window.localStorage.getItem("userinfo"));
// }
// else {
//     window.localStorage.setItem("userinfo", JSON.stringify([user]));

//     users = [user];
// }