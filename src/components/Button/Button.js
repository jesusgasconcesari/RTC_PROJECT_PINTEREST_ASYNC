import "./Button.css";

export const Button = (text, type) => {
    const button = document.createElement("button");

    button.textContent = text;
    button.classList.add("common_button", type);

    return button;
}