const images = [
    {
        name: "ankylosaur",
        src: "images/ankylosaurus.png",
        height: "8"
    }, {
        name: "brontosaur",
        src: "images/brontosaur.png",
        height: "30"
    },{
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

for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    let currentImg = images[i]
    img.alt = currentImg.name;
    img.src = currentImg.src;
    const height = currentImg.height;
    const fromBottom = getRandomInt(0,30);
    const fromLeft = getRandomInt(0,60);
    img.style = `height:${height}vh; position:absolute; left:${fromLeft}rem; bottom:${fromBottom}rem`
  
    main.appendChild(img)

    // console.log(`${fromBottom} rem`)
    // console.log(img);
}
