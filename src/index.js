import "./css/styles.css";
import loadHome from "./js/home";
import loadMenu from "./js/menu";
import loadContact from "./js/contact";

document.getElementById('home').addEventListener('click', loadHome);
document.getElementById('menu').addEventListener('click', loadMenu);
document.getElementById('contact').addEventListener('click', loadContact);

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
});