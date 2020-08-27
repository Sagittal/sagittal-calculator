import { FORMATATIONAL_PRECISION, Formatted, round } from "../../../general"
import { Mina } from "../../../notations"

const formatMina = (mina: Mina | undefined): Formatted<Mina> => {
    if (!mina) {
        return "       " as Formatted<Mina>
    }

    let formattedMina = round(mina, FORMATATIONAL_PRECISION).toString()

    let decimalPointIndex = formattedMina.indexOf(".")

    if (decimalPointIndex > 0) {
        let zerosToAppend = 3 - (formattedMina.length - (decimalPointIndex + 1))
        while (zerosToAppend > 0) {
            formattedMina = formattedMina + "0"
            zerosToAppend -= 1
        }
    } else {
        decimalPointIndex = formattedMina.length
    }
    let spacesToPrepend = 3 - decimalPointIndex
    while (spacesToPrepend > 0) {
        formattedMina = " " + formattedMina
        spacesToPrepend -= 1
    }

    return formattedMina as Formatted<Mina>
}

export {
    formatMina,
}
