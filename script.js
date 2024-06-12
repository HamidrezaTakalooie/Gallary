function upDate(previewPic) {
  let image = document.getElementById('image');
  image.style.backgroundImage = "url('" + previewPic.src + "')";
  image.textContent = previewPic.alt;
}

function unDo() {
  let image = document.getElementById('image');
  image.textContent = "Hover over an image below to display here.";
  image.style.backgroundImage = "url('')";
}

function setImages() {
  const options = [
    "Azadi Tower.jpeg",
    "Golestan Palace.jpeg",
    "Milad Tower.jpeg",
    "Naghsh Rostam.jpg",
    "Tughrul Tower.jpeg",
    "Persepolis.jpeg"
  ];

  const currentImages = document.querySelectorAll(".flex img");

  for (let i = 0; i < currentImages.length; i++) {
    console.log("Image " + i);
    let randomImg = "pics/" + options[Math.floor(Math.random() * options.length)];
    currentImages[i].src = randomImg;
    currentImages[i].setAttribute("tabindex", "0");
    currentImages[i].alt = randomImg;
  }
}

  

