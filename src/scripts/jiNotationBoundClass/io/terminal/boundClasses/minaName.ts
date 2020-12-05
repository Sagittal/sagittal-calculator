import {Formatted, IO_PRECISION, isUndefined, Maybe, Name, round} from "@sagittal/general"
import {Minas} from "@sagittal/system"

const formatMinaName = (mina: Maybe<Name<Minas>>): Formatted<Name<Minas>> => {
    if (isUndefined(mina)) {
        return "       " as Formatted<Name<Minas>>
    }

    let formattedMina = round(parseFloat(mina), IO_PRECISION).toString() as string as Formatted<Name<Minas>>

    let decimalPointIndex = formattedMina.indexOf(".")

    if (decimalPointIndex > 0) {
        let zerosToAppend = 3 - (formattedMina.length - (decimalPointIndex + 1))
        while (zerosToAppend > 0) {
            formattedMina = formattedMina + "0" as Formatted<Name<Minas>>
            zerosToAppend -= 1
        }
    } else {
        decimalPointIndex = formattedMina.length
    }
    let spacesToPrepend = 3 - decimalPointIndex
    while (spacesToPrepend > 0) {
        formattedMina = " " + formattedMina as Formatted<Name<Minas>>
        spacesToPrepend -= 1
    }

    return formattedMina as Formatted<Name<Minas>>
}

export {
    formatMinaName,
}
