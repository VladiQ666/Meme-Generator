const btn = document.querySelector("button");
const image = document.querySelector(".img");
const inputTop = document.querySelector(".input-top");
const inputBottom = document.querySelector(".input-bottom");
const textTop = document.querySelector(".meme__text-top");
const textBottom = document.querySelector(".meme__text-bottom");

const linkImages = [];

const fetchImages = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const result = await response.json();
  return result;
};

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetchImages();
  const urls = res.data.memes.map((m) => m.url);
  linkImages.push(...urls);
});

const getRandomUrl = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const randomUrl = getRandomUrl(linkImages);
  image.src = randomUrl;
  textTop.textContent = inputTop.value;
  textBottom.textContent = inputBottom.value;
});
