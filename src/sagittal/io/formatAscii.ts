import { Formatted, shallowClone } from "../../general"
import { Ascii } from "./types"

const formatAscii = (ascii: Ascii): Formatted<Ascii> => {
    if (ascii === "(|//|)") return " (|//|) " as Formatted<Ascii>

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
    formatAscii,
}
