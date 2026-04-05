const menu = document.getElementById("menu");
const shadow = document.getElementById("shadow");

const open_menu_button = document.getElementById("menu-button");
const close_menu_button = document.getElementById("close-menu");

open_menu_button.addEventListener("click", () => {
  menu.style.right = "10px";
  shadow.style.display = "block";
  shadow.style.visibility = "visible";
});

close_menu_button.addEventListener("click", () => {
  menu.style.right = "-1000px";
  shadow.style.display = "none";
  shadow.style.visibility = "invisible";
});
