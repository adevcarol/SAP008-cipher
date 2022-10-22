import cipher from './cipher.js';

const btnCifrar = document.querySelector("#botaoCifrar");
const saidaStrC = document.querySelector("#h3cifrar");
const btnDecifrar = document.querySelector("#botaoDecifrar");
const saidaStrD = document.querySelector("#h3decifrar");

btnCifrar.addEventListener('click', cifraDeCesar);
btnDecifrar.addEventListener('click', decifraDeCesar);

function cifraDeCesar() {
    const mensagem = document.querySelector("#inMsgC").value.toUpperCase();
    const desloc = parseInt(document.querySelector("#inDeslocC").value);
    const valorEncode = cipher.encode(desloc, mensagem);

    console.log(valorEncode);
    if (valorEncode === "") {
        alert("Erro nos parâmetros, digite uma palavra e numero válidos")
    }
    else {
        saidaStrC.innerText = valorEncode;
    }
}

function decifraDeCesar() {
    const mensagem = document.querySelector("#inMsgD").value.toUpperCase();
    const desloc = parseInt(document.querySelector("#inDeslocD").value);
    const valorDecode = cipher.decode(desloc, mensagem);

    console.log(valorDecode);
    if (valorDecode === "") {
        alert("Erro nos parâmetros, digite uma palavra e numero válidos")
    }
    else {
        saidaStrD.innerText = valorDecode;
    }
}