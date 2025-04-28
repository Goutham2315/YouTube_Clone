

const menuIcon = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    console.log(container.classList); // Check the applied classes
};
