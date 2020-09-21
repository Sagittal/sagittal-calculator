import { Direction, Id, isUndefined } from "../../general"
import { SYMBOLS } from "./symbols"
import { Symbol, SymbolClass } from "./types"

const getRepresentativeSymbol = (symbolClassId: Id<SymbolClass>): Symbol => {
    const maybeSymbol = SYMBOLS.find((symbol: Symbol): boolean => {
        const { apotomeCount, commaDirection } = symbol

        return symbol.symbolClassId === symbolClassId && apotomeCount === 0 && commaDirection !== Direction.SUB
    })

    if (isUndefined(maybeSymbol)) {
        throw new Error(`Could not find representative symbol for symbol class ID ${symbolClassId}.`)
    }

    return maybeSymbol
}

export {
    getRepresentativeSymbol,
}
