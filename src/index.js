import cipher from './cipher.js';

// variáveis de entrada (retorno do HTML)
let btnCifrar = document.querySelector("#botaoCifrar");
let saidaStrC = document.querySelector("#h3cifrar");
let saidaNumC = document.querySelector("#h5cifrar");

btnCifrar.addEventListener('click', cifraDeCesar);
// evento para quando o botão de cifrar for clicado

function cifraDeCesar() {
    let mensagem = document.querySelector("#inMsgC").value.toUpperCase();
    let desloc = parseInt(document.querySelector("#inDesloc").value);
    //let cifragem = cifra.encode(offset, string);
    let index = 0;

    console.log(mensagem);
    console.log(desloc);

    let asciiConvert = mensagem.charCodeAt(index);

    function encode() {
        return ((asciiConvert - 65) + desloc) % 26 + 65;
    }

    saidaNumC.innerText = encode(); // saida de texto com a resposta
    saidaStrC.innerText = String.fromCharCode(encode()); // comando para converter novamente para string
}