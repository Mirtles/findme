const images = [
    {
        name: "ankylosaur",
        src: "images/ankylosaurus.png",
        height: "8"
    }, {
        name: "brontosaur",
        src: "images/brontosaur.png",
        height: "30"
    }, {
        name: "stegosaur",
        src: "images/stegosaurus.png",
        height: "14"
    }, {
        name: "t-rex",
        src: "images/trex.png",
        height: "24"
    }, {
        name: "triceratops",
        src: "images/triceratops.png",
        height: "16"
    }, {
        name: "velociraptor",
        src: "images/velociraptor.png",
        height: "14"
    }
]

const main = document.getElementById("searchField");

function getRandomInt(min, max) {
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt
}

const foundItems = []

function addToFoundItems(image) {
    console.log(image)
    console.log(foundItems.length)

    if(foundItems.length === 0) {
        foundItems.push(image)
        return;
    }
    for (let i = 0; i < foundItems.length; i++) {
        if (foundItems[i].name !== image.name) {
            foundItems.push(image);
        }
    }
    return foundItems;
}

for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    const currentImg = images[i];
    const height = currentImg.height;
    img.alt = currentImg.name;
    img.src = currentImg.src;
    const fromLeft = getRandomInt(0, 60);
    const fromBottom = getRandomInt(0, 30);
    img.style = `height:${height}vh; position:absolute; left:${fromLeft}rem; bottom:${fromBottom}rem`
    img.addEventListener('click', function () { addToFoundItems(currentImg); console.log(currentImg) });
    main.appendChild(img)
}

