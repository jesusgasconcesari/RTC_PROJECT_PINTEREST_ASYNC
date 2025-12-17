import { Button } from "./Button";
import "./Header.css";


export const Header = (logoURL, naviconsURLS) => {
    const header = document.querySelector("header");

    const nav_links = document.createElement("ul");
    nav_links.classList.add("nav-links");   
    
    const li1 = document.createElement("li");
    const inicio = Button("Inicio", "link");
    li1.append(inicio);

    const li2 = document.createElement("li");
    const explorar = Button("Explorar", "link");
    li2.append(explorar);

    const li3 = document.createElement("li");
    const crear = Button("Crear", "link");
    li3.append(crear);

    nav_links.append(li1, li2, li3);

    const logo = document.createElement("div");
    logo.classList.add("logo");
    const logoImg = document.createElement("img");
    logoImg.src = logoURL;
    logoImg.alt = "logo";
    logo.append(logoImg);

    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Buscar imágenes...";
    form.append(input);

    const nav_icons = document.createElement("ul");
    nav_icons.classList.add("nav-icons");

    for (const url of naviconsURLS) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = url;
        img.alt = "icon";
        li.append(img);
        nav_icons.append(li);
    }

    header.append(logo);
    header.append(nav_links);
    header.append(form);
    header.append(nav_icons);

    return header;
}