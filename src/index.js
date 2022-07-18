import cipher from './cipher.js';

const frm = document.querySelector("form")
const outResp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const msg = frm.inMsg.value
    const casas = Number(frm.inDes.value)

    //cipher

    outResp.innerText = msg

    e.preventDefault()
})

// console.log(cipher)