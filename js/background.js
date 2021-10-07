const images = [
    "0.jpg",
    "1.jpg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
]


const chosenImage= images[Math.floor(Math.random()*images.length)];

const bgImage=document.querySelector("body");
bgImage.style=`background-image: url(img/${chosenImage})`;
