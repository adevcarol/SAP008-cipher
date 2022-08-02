/*
TABELA ASCII
 A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90

*/

const cipher = {
    encode: (offset, text) => { // declaração da função e parametros
        if (typeof offset !== "number" || typeof text !== "string") {
            throw new TypeError('Parâmetros Incorretos');
        }
        let resultEncode = "";

        for (let i = 0; i < text.length; i++) { // index dentro do for
            let asciiConvert = text.charCodeAt(i);
            let letraDeslocada = (((asciiConvert - 65) + offset) % 26) + 65;
            resultEncode = resultEncode.concat(String.fromCharCode(letraDeslocada));
        }

        return resultEncode;
    },
    decode: (offset, text) => {
        if (typeof offset !== "number" || typeof text !== "string") {
            throw new TypeError('Parâmetros Incorretos');
        }
        let resultDecode = "";

        for (let i = 0; i < text.length; i++) { // index dentro do for
            let asciiConvert = text.charCodeAt(i);
            let letraDeslocada = (((asciiConvert - 90) - offset) % 26) + 90;
            resultDecode = resultDecode.concat(String.fromCharCode(letraDeslocada));
        }

        return resultDecode;
    }

}

export default cipher;