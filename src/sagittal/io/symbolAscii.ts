import { Formatted } from "../../general"
import { SymbolLongAscii } from "./types"

const formatSymbolAscii = (symbolAscii: SymbolLongAscii): Formatted<SymbolLongAscii> => {
    const shaftIndex = symbolAscii.indexOf("|")

    let spacesToPrepend = 5 - shaftIndex

    let formattedSymbolAscii = symbolAscii.slice()
    while (spacesToPrepend > 0) {
        formattedSymbolAscii = " " + formattedSymbolAscii
        spacesToPrepend -= 1
    }
    while (formattedSymbolAscii.length < 8) {
        formattedSymbolAscii = formattedSymbolAscii + " "
    }

    return formattedSymbolAscii as Formatted<SymbolLongAscii>
}

export {
    formatSymbolAscii,
}
