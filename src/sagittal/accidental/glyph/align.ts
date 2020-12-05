import {Formatted, shallowClone} from "@sagittal/general"
import {PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii} from "./types"

const alignAscii = (ascii: Ascii): Formatted<Ascii> => {
    if (ascii === PARENTHETICAL_NATURAL_ASCII) {
        return ` ${PARENTHETICAL_NATURAL_ASCII} ` as Formatted<Ascii>
    }

    const shaftIndex = ascii.indexOf("|")

    let spacesToPrepend = 5 - shaftIndex

    let formattedAscii: Formatted<Ascii> = shallowClone(ascii) as string as Formatted<Ascii>

    while (spacesToPrepend > 0) {
        formattedAscii = " " + formattedAscii as Formatted<Ascii>
        spacesToPrepend -= 1
    }

    while (formattedAscii.length < 8) {
        formattedAscii = formattedAscii + " " as Formatted<Ascii>
    }

    return formattedAscii as Formatted<Ascii>
}

export {
    alignAscii,
}
