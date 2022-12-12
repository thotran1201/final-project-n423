const imageInput = document.getElementById("upload");
var uploadImage = "";
var imgNum = 1;


imageInput.onchange = function() {
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0])
    reader.addEventListener("load", () => {
        uploadImage = reader.result;
        document.getElementById("displayimage").style.backgroundImage = `url(${uploadImage})`
        const url = reader.result
        let imagedata = {
            url: url
        }
        let images = JSON.parse(window.localStorage.getItem("images")) || [];
        images.push(imagedata)
        window.localStorage.setItem("images", JSON.stringify(images));
    });
}

document.getElementById("submitbutton").onclick = function() {
    uploadImageFunction(uploadImage)
}

function uploadImageFunction(imageurl) {
    if(imageurl === "") {
        alert("upload an image");
    }
    else {
        alert("image added");
        let images = JSON.parse(window.localStorage.getItem("images")) || [];
        updateImages(images);
    }
}

function updateImages(images) {
    const imageList = document.getElementById("celebrityworst")
    imageList.innerHTML = "";
    for (let index = 0; index < images.length; index++) {
        const element = images[index];
        console.log(element)
        let template = `<div class="celebrity-item">
        <img id="celebimage" src="${element.url}" alt="" onclick="removeImage(this.src)">
        </div>`
        imageList.insertAdjacentHTML("beforeend", template);
        imgNum++
    }
}

function removeImage(url) {
    let imageList = JSON.parse(window.localStorage.getItem("images")) || [];
    let i = -1;

    for (let index = 0; index < imageList.length; index++) {
        const element = imageList[index];
        if(element.url === url) {
            i = index;
            break
        }
    }
    if(i > -1) {
        imageList.splice(i,1);
    }

    window.localStorage.setItem("images", JSON.stringify(imageList));
    imageList = JSON.parse(window.localStorage.getItem("images")) || [];
    updateImages(imageList);
}