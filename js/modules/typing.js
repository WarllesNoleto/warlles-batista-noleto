export default function initTyping() {
    let letter = 0;
    const text = 'Warlles Noleto';

    function typeWriter() {
        if (letter < text.length) {
            // Adiciona a próxima letra ao elemento com a classe "principal__sentence"
            document.querySelector(".principal__sentence").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 181); // Chama a função novamente após 181ms
        }
    }

    typeWriter(); // Inicia a animação de digitação
}