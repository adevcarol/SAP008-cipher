const cipher = {
    encode: (offset, text) => {
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