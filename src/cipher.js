/*
TABELA ASCII
 A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90

*/

const cipher = { encode, decode } // funcoes

function encode(offset, text) { // parametros
    let resultEncode = "";
    let numLetras = text.length;

    for (let i = 0; i < numLetras; i++) { // index dentro do for
        let asciiConvert = text.charCodeAt(i);
        let letraDeslocada = (((asciiConvert - 65) + offset) % 26) + 65;
        resultEncode = resultEncode.concat(String.fromCharCode(letraDeslocada));
    }

    return resultEncode;
}

function decode(offset, text) {
    let resultDecode = "";
    let numLetras = text.length;

    for (let i = 0; i < numLetras; i++) { // index dentro do for
        let asciiConvert = text.charCodeAt(i);
        let letraDeslocada = (((asciiConvert - 90) - offset) % 26) + 90;
        resultDecode = resultDecode.concat(String.fromCharCode(letraDeslocada));
    }

    return resultDecode;
}

export default cipher;