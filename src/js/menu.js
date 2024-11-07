export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const description = document.createElement("p");
    description.textContent = "Explore our wide variety of delicious meals.";

    content.appendChild(headline);
    content.appendChild(description);
}