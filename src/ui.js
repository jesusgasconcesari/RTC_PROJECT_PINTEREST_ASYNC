import { Card } from "./components/Card.js";

export function renderImages(images) {
  const container = document.querySelector("#gallery");
  container.innerHTML = ""; // limpiar antes de pintar

  images.forEach(img => {
    const card = Card(img);
    container.append(card);
  });
}
