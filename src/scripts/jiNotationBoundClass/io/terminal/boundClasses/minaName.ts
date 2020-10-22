import {Formatted, IO_PRECISION, isUndefined, Maybe, Name, round} from "../../../../../general"
import {Mina} from "../../../../../sagittal"

const formatMinaName = (mina: Maybe<Name<Mina>>): Formatted<Name<Mina>> => {
    if (isUndefined(mina)) {
        return "       " as Formatted<Name<Mina>>
    }

    let formattedMina = round(parseFloat(mina), IO_PRECISION).toString() as string as Formatted<Name<Mina>>

    let decimalPointIndex = formattedMina.indexOf(".")

    if (decimalPointIndex > 0) {
        let zerosToAppend = 3 - (formattedMina.length - (decimalPointIndex + 1))
        while (zerosToAppend > 0) {
            formattedMina = formattedMina + "0" as Formatted<Name<Mina>>
            zerosToAppend -= 1
        }
    } else {
        decimalPointIndex = formattedMina.length
    }
    let spacesToPrepend = 3 - decimalPointIndex
    while (spacesToPrepend > 0) {
        formattedMina = " " + formattedMina as Formatted<Name<Mina>>
        spacesToPrepend -= 1
    }

    return formattedMina as Formatted<Name<Mina>>
}

export {
    formatMinaName,
}
