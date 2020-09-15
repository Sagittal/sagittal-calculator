import { Direction, Id, isUndefined } from "../../general"
import { REVO_SYMBOLS } from "./symbols"
import { RevoSymbol, SymbolClass } from "./types"

const getRepresentativeSymbol = (symbolClassId: Id<SymbolClass>): RevoSymbol => {
    const maybeSymbol = REVO_SYMBOLS.find((revoSymbol: RevoSymbol): boolean => {
        const { apotomeCount, direction } = revoSymbol

        return revoSymbol.symbolClassId === symbolClassId && apotomeCount === 0 && direction === Direction.SUPER
    })

    if (isUndefined(maybeSymbol)) {
        throw new Error(`Could not find representative symbol for symbol class ID ${symbolClassId}.`)
    }

    return maybeSymbol
}

export {
    getRepresentativeSymbol,
}
