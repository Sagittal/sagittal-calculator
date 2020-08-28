import { isUndefined, Maybe } from "../../../general"
import {
    Bound,
    BoundedSymbolIdWithDistancesPair,
    getJiSymbol,
    Level,
    LEVEL_BOUNDED_SYMBOLS,
    SymbolLongAscii,
} from "../../../notations"
import { computeJiSymbolWithPrimaryComma } from "./jiSymbolWithPrimaryComma"
import { BoundedJiSymbol, BoundedJiSymbolsWithPrimaryCommas, BoundIdentifiers } from "./types"

const extractBoundIdentifiers = (bound: Bound): BoundIdentifiers => {
    const { cents, id } = bound

    const boundIdWithBoundedSymbolIdWithDistancesPairsByLevel =
        LEVEL_BOUNDED_SYMBOLS.find(symbol => symbol.id === id)
    if (!boundIdWithBoundedSymbolIdWithDistancesPairsByLevel) {
        throw new Error(`Could not find bounded symbols for bound with ID ${id}`)
    }

    const [lesserBoundedSymbolIdWithDistance, greaterBoundedSymbolIdWithDistance]: BoundedSymbolIdWithDistancesPair =
        boundIdWithBoundedSymbolIdWithDistancesPairsByLevel[ Level.EXTREME ] as BoundedSymbolIdWithDistancesPair

    const lesserBoundedSymbol: Maybe<BoundedJiSymbol> = lesserBoundedSymbolIdWithDistance && {
        ...lesserBoundedSymbolIdWithDistance,
        ...getJiSymbol(lesserBoundedSymbolIdWithDistance.id),
    } as BoundedJiSymbol
    const greaterBoundedSymbol: Maybe<BoundedJiSymbol> = greaterBoundedSymbolIdWithDistance && {
        ...greaterBoundedSymbolIdWithDistance,
        ...getJiSymbol(greaterBoundedSymbolIdWithDistance.id),
    } as BoundedJiSymbol

    const boundedSymbols: BoundedJiSymbolsWithPrimaryCommas =
        Object.entries(boundIdWithBoundedSymbolIdWithDistancesPairsByLevel).reduce(
            (boundedSymbols, [level, boundIdWithBoundedSymbolIdWithDistancesPair]) => {
                if (level === "id") return boundedSymbols

                const [first, second] = boundIdWithBoundedSymbolIdWithDistancesPair

                let firstBoundedJiSymbolWithPrimaryComma
                if (!isUndefined(first)) {
                    const firstJiSymbolWithPrimaryComma = computeJiSymbolWithPrimaryComma(first.id)
                    firstBoundedJiSymbolWithPrimaryComma = { ...first, ...firstJiSymbolWithPrimaryComma }
                }

                let secondBoundedJiSymbolWithPrimaryComma
                if (!isUndefined(second)) {
                    const secondJiSymbolWithPrimaryComma = computeJiSymbolWithPrimaryComma(second.id)
                    secondBoundedJiSymbolWithPrimaryComma = { ...second, ...secondJiSymbolWithPrimaryComma }
                }

                return {
                    ...boundedSymbols,
                    [ level ]: [
                        firstBoundedJiSymbolWithPrimaryComma,
                        secondBoundedJiSymbolWithPrimaryComma,
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
