import { Card } from "../components/Card/Card.js";

export function renderImages(images) {
  const container = document.querySelector("#gallery");
  container.innerHTML = "";

  container.classList.remove("error"); 

  images.forEach(img => {
    const card = Card(img);
    container.append(card);
  });
}

export function renderError(text) {
  const container = document.querySelector("#gallery");
  container.innerHTML = "";

  container.classList.add("error");

  const msg = document.createElement("p");
  msg.textContent = text;

  container.append(msg);
}
