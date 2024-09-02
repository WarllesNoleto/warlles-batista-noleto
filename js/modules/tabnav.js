export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li"); // Seleciona todos os itens do menu de abas
  const tabContent = document.querySelectorAll("[data-tab='content'] section"); // Seleciona todas as seções de conteúdo das abas

  if (tabMenu.length && tabContent.length) {
    tabMenu[1].classList.add("active"); // Ativa a segunda aba por padrão
    tabContent[1].classList.add("active"); // Ativa o conteúdo da segunda aba por padrão

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("active"); // Remove a classe 'active' de todas as seções de conteúdo
      });
      const direction = tabContent[index].dataset.anime; // Obtém a direção da animação
      tabContent[index].classList.add("active", direction); // Adiciona a classe 'active' e a direção da animação à seção de conteúdo correspondente

      tabMenu.forEach((content) => {
        content.classList.remove("active"); // Remove a classe 'active' de todos os itens do menu de abas
      });
      tabMenu[index].classList.add("active"); // Adiciona a classe 'active' ao item do menu de abas correspondente
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index); // Ativa a aba correspondente ao clique
      });
    });
  }
}