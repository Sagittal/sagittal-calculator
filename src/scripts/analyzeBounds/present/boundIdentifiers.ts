import {LEVEL_BOUNDED_SYMBOLS} from "../../../notations/ji/levelBoundedSymbols"

const extractBoundIdentifiers = bound => {
    const {position, id} = bound
    const boundedSymbols = LEVEL_BOUNDED_SYMBOLS.find(symbol => symbol.id === id)
    const extremeBoundedSymbols = boundedSymbols["EXTREME"]
    const [lesserBoundedSymbol, greaterBoundedSymbol] = extremeBoundedSymbols

    return {
        extremeLevelLesserBoundedSymbol: lesserBoundedSymbol ? lesserBoundedSymbol.ascii : "",
        extremeLevelGreaterBoundedSymbol: greaterBoundedSymbol ? greaterBoundedSymbol.ascii : "",
        position,
        boundedSymbols,
        lesserBoundedMina: lesserBoundedSymbol ? lesserBoundedSymbol.mina : "",
        greaterBoundedMina: greaterBoundedSymbol && greaterBoundedSymbol.mina,
    }
}

export {
    extractBoundIdentifiers,
}
