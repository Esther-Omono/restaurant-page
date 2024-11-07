import Logo from "../thelogo.png";

export default function loadHome() {
    const content = document.getElementById("content");

    const image = document.createElement("img");
    image.src = Logo;

    const headline = document.createElement("h1")
    headline.textContent = "Welcome to The Velvet Spoon Restaurant!";

    const description = document.createElement("p");
    description.textContent = "Experience the finest dining in a cozy, velvet-themed setting.";

    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(description);
}