/*
TABELA ASCII
 A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90

*/

const cipher = { encode, decode } //funcoes

function encode(offset, text) { //parametros
    let index = 0; // dentro do for será let
    const asciiConvert = text.charCodeAt(index);
    const letraDeslocada = ((asciiConvert - 65) + offset) % 26 + 65;
    const letraCifrada = String.fromCharCode(letraDeslocada);
    return letraCifrada
}


function decode(offset, text) {
}

export default cipher;
