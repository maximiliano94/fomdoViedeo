const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");
const playPauseBtn = document.getElementById('playPauseBtn');
const preloaderImg = document.querySelector('.preloader-img');
const icon = playPauseBtn.querySelector('i');

playPauseBtn.addEventListener('click', () => {
    if (icon.classList.contains('fa-pause')) {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        preloaderImg.classList.remove('animate');
    } else {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        preloaderImg.classList.add('animate');
    }
});

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    fa.classList.remove("fa-pause");
    fa.classList.add("fa-play");
  }
});

window.addEventListener("load", () => {
  preloader.style.zIndex = "-999";
});