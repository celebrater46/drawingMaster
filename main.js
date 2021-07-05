"use strict";

{
  const images = [
    "img/pic00.png",
    "img/pic01.png",
    "img/pic02.png",
    "img/pic03.png",
    "img/pic04.png",
    "img/pic05.png",
    "img/pic06.png",
    "img/pic07.png",
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById("mainImg");
  mainImage.src = images[currentIndex]; // Not "textContent"

  // forEachは二つ以上の引数に括弧必須
  images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;

    const li = document.createElement("li");
    if (index === currentIndex) {
      li.classList.add("current");
    }

    li.addEventListener("click", () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll(".thumbnails > li");
      thumbnails[currentIndex].classList.remove("current");
      currentIndex = index;
      thumbnails[currentIndex].classList.add("current");
    });

    li.appendChild(img);
    document.querySelector(".thumbnails").appendChild(li);
  });

  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll(".thumbnails > li")[target].click();
  });
  
  const prevButton = document.getElementById("prev");
  prevButton.addEventListener("click", () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll(".thumbnails > li")[target].click();
  });

  let isPlaying = false;
  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      nextButton.click();
      playSlideshow();
    }, 1000);
  }

  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (isPlaying === false) {
      playSlideshow();
      play.textContent = "Pause";
    } else {
      clearTimeout(timeoutId);
      play.textContent = "Play";
    }
    isPlaying = !isPlaying; // 値の反転
  });
}