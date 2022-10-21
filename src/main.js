import "./css/index.css";
import IMask from "imask";

const cardColor1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const cardColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const cardLogo = document.querySelector(".cc-logo span:nth-child(2) img ")

function setCardType(type){
    const colors = {
        "visa": [
            "#3b82f6","#60a5fa"
        ],
        "mastercard":[
            "#b91c1c", "#ea580c"
        ],
        "default":[
            "#44403c", "#292524"
        ],
        "elo":[
            "#EF4444","#FCD34D"
        ],
    }
    cardColor2.setAttribute("fill",colors[type][0])
    cardColor1.setAttribute("fill",colors[type][1])
    cardLogo.setAttribute("src", `cc-${type}.svg`)
}

    globalThis.setCardType = setCardType
    //Número do cartão
    const cardNumber = document.getElementById('card-number')
    const cardNumberPattern = {
        mask: "0000-0000-0000-0000"
    }
    const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

    //Data de Expiração
    const expDate = document.getElementById('expiration-date')
    const expDatePattern = {
       mask:'DD/MM/AAAA',
       lazy: false,

       blocks:{
        DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        },
        AAAA: {
            mask: '0000'
        },
       }
    }
    const expDateMasked = IMask(expDate, expDatePattern)

    // cvc
    const securityCode = document.getElementById('security-code')
    const securityCodePattern = {
        mask: "000"
    }
    const cvcMasked = IMask(securityCode, securityCodePattern)
    


