import "./Card.css";
import { Button } from "./Button.js";

function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

export const Card = (object) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("Foto");
    img.src = object.urls.small;
    img.alt = object.alt_description;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const icons = document.createElement("div");
    icons.classList.add("icons");

    const likeIcon = document.createElement("div");
    likeIcon.classList.add("icon");
    const likeImg = document.createElement("img");
    likeImg.src = "./src/assets/like_heart.png";
    likeImg.alt = "like";
    const likeCount = document.createElement("p");
    likeCount.innerText = object.likes;
    likeIcon.append(likeImg);
    likeIcon.append(likeCount);
    icons.append(likeIcon);

    const PhotosIcon = document.createElement("div");
    PhotosIcon.classList.add("icon");
    const photosImg = document.createElement("img");
    photosImg.src = "./src/assets/Vector.png";
    photosImg.alt = "photos";
    const photosCount = document.createElement("p");
    photosCount.innerText = object.user.total_collections;
    PhotosIcon.append(photosImg);
    PhotosIcon.append(photosCount);
    icons.append(PhotosIcon);

    const button = Button(" Visitar ", "red");

    overlay.append(icons, button);
    
    const img_box = document.createElement("div");
    img_box.classList.add("img-box");

    img_box.append(img, overlay);

    
    const author = document.createElement("div");
    author.classList.add("author");

    const imgU = document.createElement("img");
    imgU.classList.add("UserFoto");
    imgU.src = object.user.profile_image.small;
    imgU.alt = object.user.username;
    imgU.style.borderColor = randomColor();

    const info = document.createElement("div");
    info.classList.add("info");

    const h2 = document.createElement("h2");
    h2.classList.add("UserName");
    h2.innerText = object.user.name;

    const p = document.createElement("p");
    p.classList.add("date");
    p.innerText = object.updated_at.slice(0,10);
    info.append(h2, p);

    author.append(imgU, info);
    card.append(img_box, author);

    return card;
}