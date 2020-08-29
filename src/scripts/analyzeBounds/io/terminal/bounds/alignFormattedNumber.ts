import { Formatted } from "../../../../../general"

// todo: why not use this pretty much everywhere for all tables?
const alignFormattedNumber = (formattedNumber: Formatted<number>): Formatted<number> => {
    while (formattedNumber.length < 7) {
        formattedNumber = " " + formattedNumber as Formatted<number>
    }

    return formattedNumber
}

export {
    alignFormattedNumber,
}
