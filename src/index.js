import cipher from './cipher.js';

// variáveis de entrada (retorno do HTML)
const frmCifrar = document.querySelector("#cifrar")
const saidaNumC = document.querySelector("#h5cifrar")
const saidaStrC = document.querySelector("#h3cifrar")

// evento para quando o botão de cifrar for clicado
frmCifrar.addEventListener("submit", (e) => {
    const mensagem = frmCifrar.inMsg.value.toUpperCase() // variável que está sendo atribuida a mensagem inserida pelo usuário no HTML
    const desloc = Number(frmCifrar.inDesloc.value)
    const index = 0

    // código para cifragem da palavra
    // const cifra = mensagem.charCodeAt(index)
    const asciiConvert = mensagem.charCodeAt(index)

    function encode() {
        return ((asciiConvert - 65) + desloc) % 26 + 65;
    }

    // código para a palavra cifrada

    saidaNumC.innerText = encode() // saida de texto com a resposta
    saidaStrC.innerText = String.fromCharCode(encode()) // comando para converter novamente para string

    e.preventDefault()
})