import { Formatted } from "./types"

const alignFormattedNumber = <T extends number>(formattedNumber: Formatted<T>): Formatted<T> => {
    while (formattedNumber.length < 7) {
        formattedNumber = " " + formattedNumber as Formatted<T>
    }

    return formattedNumber
}

export {
    alignFormattedNumber,
}
