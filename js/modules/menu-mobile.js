export default function initMenuMobile() {
    const menuButton = document.querySelector("[data-menu='button']"); // Seleciona o botão do menu
    const menuList = document.querySelector("[data-menu='list']"); // Seleciona a lista do menu

    menuButton.addEventListener('click', openMenu); // Adiciona um evento de clique ao botão do menu

    function openMenu() {
        menuList.classList.toggle('active'); // Alterna a classe 'active' na lista do menu
        menuButton.classList.toggle('active'); // Alterna a classe 'active' no botão do menu
    }
}