const {LEVEL_BOUNDED_SYMBOLS} = require("../../../notations/ji/levelBoundedSymbols")

const extractBoundIdentifiers = bound => {
    const {position, id} = bound
    const boundedSymbols = LEVEL_BOUNDED_SYMBOLS.find(comma => comma.id === id)
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

module.exports = {
    extractBoundIdentifiers,
}
