import { Card } from "../components/Card/Card.js";

export function renderImages(images) {
  const container = document.querySelector("#gallery");
  container.innerHTML = ""; // limpiar antes de pintar

  images.forEach(img => {
    const card = Card(img);
    container.append(card);
  });
}

export function renderError(text) {
  const container = document.querySelector("#gallery");
  container.innerHTML = ""; // limpiar antes de pintar

  const msg = document.createElement("p");
  msg.textContent = text;
  msg.style.textAlign = "center";
  msg.style.color = "gray";
  msg.style.fontSize = "18px";

  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";

  container.append(msg);
}
