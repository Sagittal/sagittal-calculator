import { Formatted, shallowClone } from "../../general"
import { SymbolLongAscii } from "./types"

const formatSymbolAscii = (symbolAscii: SymbolLongAscii): Formatted<SymbolLongAscii> => {
    if (symbolAscii === "(|//|)") return " (|//|) " as Formatted<SymbolLongAscii>
    
    const shaftIndex = symbolAscii.indexOf("|")

    let spacesToPrepend = 5 - shaftIndex

    let formattedSymbolAscii: Formatted<SymbolLongAscii> =
        shallowClone(symbolAscii) as string as Formatted<SymbolLongAscii>

    while (spacesToPrepend > 0) {
        formattedSymbolAscii = " " + formattedSymbolAscii as Formatted<SymbolLongAscii>
        spacesToPrepend -= 1
    }

    while (formattedSymbolAscii.length < 8) {
        formattedSymbolAscii = formattedSymbolAscii + " " as Formatted<SymbolLongAscii>
    }

    return formattedSymbolAscii as Formatted<SymbolLongAscii>
}

export {
    formatSymbolAscii,
}
