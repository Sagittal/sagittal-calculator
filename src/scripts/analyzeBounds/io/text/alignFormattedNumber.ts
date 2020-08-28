import { Formatted } from "../../../../general"

const alignFormattedNumber = (formattedNumber: Formatted<number>): Formatted<number> => {
    while (formattedNumber.length < 7) {
        formattedNumber = " " + formattedNumber as Formatted<number>
    }

    return formattedNumber
}

export {
    alignFormattedNumber,
}
