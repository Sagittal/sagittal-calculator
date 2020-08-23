import {
    Bound,
    BoundedSymbolIdWithDistancesPair,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
    getSymbol,
    Level,
    LEVEL_BOUNDED_SYMBOLS,
    SymbolLongAscii,
} from "../../../notations"
import { BoundedSymbol, BoundedSymbols, BoundIdentifiers } from "./types"

const extractBoundIdentifiers = (bound: Bound): BoundIdentifiers => {
    const { cents, id } = bound

    const boundIdWithBoundedSymbolIdWithDistancesPairsByLevel: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel | undefined =
        LEVEL_BOUNDED_SYMBOLS.find(symbol => symbol.id === id)
    if (!boundIdWithBoundedSymbolIdWithDistancesPairsByLevel) {
        throw new Error(`Could not find bounded symbols for bound with ID ${id}`)
    }

    const [lesserBoundedSymbolIdWithDistance, greaterBoundedSymbolIdWithDistance]: BoundedSymbolIdWithDistancesPair =
        boundIdWithBoundedSymbolIdWithDistancesPairsByLevel[ Level.EXTREME ] as BoundedSymbolIdWithDistancesPair

    const lesserBoundedSymbol: BoundedSymbol | undefined = lesserBoundedSymbolIdWithDistance && {
        ...lesserBoundedSymbolIdWithDistance,
        ...getSymbol(lesserBoundedSymbolIdWithDistance.id),
    } as BoundedSymbol
    const greaterBoundedSymbol: BoundedSymbol | undefined = greaterBoundedSymbolIdWithDistance && {
        ...greaterBoundedSymbolIdWithDistance,
        ...getSymbol(greaterBoundedSymbolIdWithDistance.id),
    } as BoundedSymbol

    const boundedSymbols: BoundedSymbols = // boundIdWithBoundedSymbolIdWithDistancesPairsByLevel as BoundedSymbols
        Object.entries(boundIdWithBoundedSymbolIdWithDistancesPairsByLevel).reduce(
            (boundedSymbols, [level, boundIdWithBoundedSymbolIdWithDistancesPair]) => {
                if (level === "id") return boundedSymbols

                const [first, second] = boundIdWithBoundedSymbolIdWithDistancesPair
                return {
                    ...boundedSymbols,
                    [ level ]: [
                        first && { ...first, ...getSymbol(first.id) },
                        second && { ...second, ...getSymbol(second.id) },
                    ],
                }
            },
            {
                id: boundIdWithBoundedSymbolIdWithDistancesPairsByLevel.id,
            },
        )

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
