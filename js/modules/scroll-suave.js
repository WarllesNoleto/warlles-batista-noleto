export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']"); // Seleciona todos os links internos

    function scrollToSection(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        const href = event.currentTarget.getAttribute("href"); // Obtém o atributo href do link
        const section = document.querySelector(href); // Seleciona a seção correspondente
        section.scrollIntoView({
            behavior: 'smooth', // Define o comportamento de rolagem suave
            block: 'start', // Alinha a seção ao topo da janela
        });
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection); // Adiciona o evento de clique a cada link
    });
}