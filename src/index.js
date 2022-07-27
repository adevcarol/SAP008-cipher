import cipher from './cipher.js';

// variáveis de entrada (retorno do HTML)
const btnCifrar = document.querySelector("#botaoCifrar");
const saidaStrC = document.querySelector("#h3cifrar");

btnCifrar.addEventListener('click', cifraDeCesar);
// evento para quando o botão de cifrar for clicado

function cifraDeCesar() {
    const mensagem = document.querySelector("#inMsgC").value.toUpperCase();
    const desloc = parseInt(document.querySelector("#inDesloc").value);

    /*
    console.log(mensagem);
    console.log(desloc);
    */

    saidaStrC.innerText = cipher.encode(desloc, mensagem) // comando para converter novamente para string
}