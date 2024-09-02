export default function initMenuTransition() {
    
    function transitionMenu() {
        const nav = document.querySelector('nav'); // Seleciona o elemento <nav>
        nav.classList.toggle("fixed", window.scrollY > 0); // Adiciona ou remove a classe 'fixed' com base na posição de rolagem
    }

    window.addEventListener('scroll', transitionMenu); // Adiciona um evento de rolagem para chamar transitionMenu
}