import {SYMBOLS} from "./symbols"

const computePositionSymbol = position => {
    if (!position) return undefined

    return SYMBOLS.find(symbol => {
        return symbol.primaryComma.position === position
    })
}

export {
    computePositionSymbol,
}
