import {round} from "../../../utilities/round"

const presentMina = mina => {
    if (!mina) return "       "

    let presentedMina = round(mina, 3).toString()

    let decimalPointIndex = presentedMina.indexOf(".")

    if (decimalPointIndex > 0) {
        let zerosToAppend = 3 - (presentedMina.length - (decimalPointIndex + 1))
        while (zerosToAppend > 0) {
            presentedMina = presentedMina + "0"
            zerosToAppend -= 1
        }
    } else {
        decimalPointIndex = presentedMina.length
    }
    let spacesToPrepend = 3 - decimalPointIndex
    while (spacesToPrepend > 0) {
        presentedMina = " " + presentedMina
        spacesToPrepend -= 1
    }

    return presentedMina
}

export {
    presentMina,
}
