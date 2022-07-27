import cipher from './cipher.js';

// variáveis de entrada (retorno do HTML)
const btnCifrar = document.querySelector("#botaoCifrar");
const saidaStrC = document.querySelector("#h3cifrar");
const btnDecifrar = document.querySelector("#botaoDecifrar");
const saidaStrD = document.querySelector("#h3decifrar");

btnCifrar.addEventListener('click', cifraDeCesar);
btnDecifrar.addEventListener('click', decifraDeCesar);
// evento para quando o botão de cifrar for clicado

function cifraDeCesar() {
    const mensagem = document.querySelector("#inMsgC").value.toUpperCase();
    const desloc = parseInt(document.querySelector("#inDeslocC").value);
    const valorEncode = cipher.encode(desloc, mensagem);

    console.log(valorEncode);
    saidaStrC.innerText = valorEncode;
}

function decifraDeCesar() {
    const mensagem = document.querySelector("#inMsgD").value.toUpperCase();
    const desloc = parseInt(document.querySelector("#inDeslocD").value);
    const valorDecode = cipher.decode(desloc, mensagem);

    console.log(valorDecode);
    saidaStrD.innerText = valorDecode;
}