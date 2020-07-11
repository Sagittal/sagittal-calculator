import { SymbolLongAscii } from "../../../notations/ji/types"

const presentSymbolAscii = (symbolAscii: SymbolLongAscii) => {
    const shaftIndex = symbolAscii.indexOf("|")

    let spacesToPrepend = 5 - shaftIndex

    let presentedSymbolAscii = symbolAscii.slice()
    while (spacesToPrepend > 0) {
        presentedSymbolAscii = " " + presentedSymbolAscii
        spacesToPrepend -= 1
    }
    while (presentedSymbolAscii.length < 8) {
        presentedSymbolAscii = presentedSymbolAscii + " "
    }

    return presentedSymbolAscii
}

export {
    presentSymbolAscii,
}
