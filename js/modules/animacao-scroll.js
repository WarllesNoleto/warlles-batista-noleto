export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='js-scroll']");

    function animaScroll() {
        sections.forEach((section) => {
            const halfSection = window.innerHeight * 0.6; // Calcula a metade da altura da janela
            const sectionTop = section.getBoundingClientRect().top; // Obtém a posição do topo da seção
            const isSectionVisible = sectionTop - halfSection < 0; // Verifica se a seção está visível
            if (isSectionVisible) {
                section.classList.add('animation'); // Adiciona a classe 'animation' se a seção estiver visível
            }
        });
    }

    window.addEventListener('scroll', animaScroll); // Adiciona o evento de scroll para chamar animaScroll
}