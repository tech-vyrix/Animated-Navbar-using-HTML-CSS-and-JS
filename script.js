const menu = document.querySelectorAll('.menu');
function activeMenuOption() {
    menu.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
menu.forEach((item) =>
item.addEventListener('click', activeMenuOption));