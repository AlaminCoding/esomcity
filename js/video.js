const playBtn = document.querySelector(".play-btn");
const videoSec = document.querySelector(".video-section");
const closebtn = document.querySelector(".video-close");
playBtn.addEventListener("click", function () {
  videoSec.style.display = "block";
  videoSec.innerHTML = `<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/ce6dhqGWdrA"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe
><i class="bi bi-x-square video-close" onclick="videoClose()"></i>`;
  document.body.style.height = "100vh";
});

function videoClose() {
  videoSec.style.display = "none";
  videoSec.innerHTML = "";
  document.body.style.height = "auto";
}
