import { Bound, BoundedSymbol, BoundedSymbols, Level, LEVEL_BOUNDED_SYMBOLS, SymbolLongAscii } from "../../../notations"
import { BoundIdentifiers } from "./types"

const extractBoundIdentifiers = (bound: Bound): BoundIdentifiers => {
    const { cents, id } = bound
    const boundedSymbols: BoundedSymbols | undefined = LEVEL_BOUNDED_SYMBOLS.find(symbol => symbol.id === id)
    if (!boundedSymbols) { throw new Error(`Could not find bounded symbols for bound with ID ${id}`) }
    const extremeBoundedSymbols: [BoundedSymbol | undefined, BoundedSymbol | undefined] = boundedSymbols[ Level.EXTREME ] as [BoundedSymbol | undefined, BoundedSymbol | undefined]
    const [lesserBoundedSymbol, greaterBoundedSymbol] = extremeBoundedSymbols

    return {
        extremeLevelLesserBoundedSymbol: lesserBoundedSymbol ? lesserBoundedSymbol.ascii : "" as SymbolLongAscii,
        extremeLevelGreaterBoundedSymbol: greaterBoundedSymbol ? greaterBoundedSymbol.ascii : "" as SymbolLongAscii,
        cents: cents,
        boundedSymbols,
        lesserBoundedMina: lesserBoundedSymbol && lesserBoundedSymbol.mina,
        greaterBoundedMina: greaterBoundedSymbol && greaterBoundedSymbol.mina,
    }
}

export {
    extractBoundIdentifiers,
}
