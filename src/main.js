import './style.css'

import { searchImages } from './api/unsplash'
import { renderError, renderImages } from './utils/ui.js';
import { Header } from './components/Header/Header.js';

Header("./src/assets/logopinteres 1.png", ["./src/assets/icon_bell.png", "./src/assets/CommentDots.png", "./src/assets/Frame6.png"]);

const loadInitialImages = async () => {
  try {
    const images = await searchImages("Welcome");

    if (!images.length) {
      renderError("No se encontraron imágenes");
      return;
    }

    renderImages(images);
  } catch (error) {
    renderError("Error al cargar imágenes");
  }
};


document.addEventListener("DOMContentLoaded", loadInitialImages);

const form = document.querySelector("form");
const input = document.querySelector("input");

const logo = document.querySelector(".logo");

logo.addEventListener("click", loadInitialImages);

form.addEventListener("submit",async(e) =>{
  e.preventDefault();
  const query = input.value.trim();
  if(!query) return;

  const results = await searchImages(query);
  if (results.length === 0){
    console.log("No se encontraron imágenes para tu búsqueda");
    renderError("No se encontraron imágenes para tu búsqueda");
  } else {
    renderImages(results);
  }

  input.value = "";
});