import cipher from './cipher.js';

// variáveis de entrada (retorno do HTML)
const frm = document.querySelector("form")
const saidaNum = document.querySelector("h5")
const saidaStr = document.querySelector("h3")

// evento para quando o botão de cifrar for clicado
frm.addEventListener("submit", (e) => {
    const mensagem = frm.inMsg.value // variável que está sendo atribuida a mensagem inserida pelo usuário no HTML
    const desloc = Number(frm.inDesloc.value)
    const index = 0

    // código para cifragem da palavra
    // const cifra = mensagem.charCodeAt(index)
    const asciiConvert = mensagem.charCodeAt(index)

    function cifra() {
        return ((asciiConvert - 65) + desloc) % 26 + 65
    }

    // código para a palavra cifrada

    saidaNum.innerText = cifra() // saida de texto com a resposta
    saidaStr.innerText = String.fromCharCode(cifra()) // comando para converter novamente para string

    e.preventDefault()
})