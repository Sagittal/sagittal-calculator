import { computeBoundedSymbolPositions } from "./boundedSymbolPositions"
import { computePositionSymbol } from "./positionSymbol"
import { computeInaDistance } from "./inaDistance"
import { BOUNDS } from "./bounds"
import { Bound, BoundedSymbols, SagittalSymbol } from "./types"
import { Cents } from "../../utilities/types"

const computeLevelBoundedSymbols = (bound: Bound): BoundedSymbols => {
    const { position, levels, id } = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedSymbols: Array<SagittalSymbol | undefined> = computeBoundedSymbolPositions(position, level).map((position: Cents | undefined) => computePositionSymbol(position))
            const levelBoundedSymbolsWithDistance = levelBoundedSymbols.map(symbol => {
                if (symbol) {
                    const distance: Cents = Math.abs(position - symbol.primaryComma.position) as Cents

                    return {
                        ...symbol,
                        distance,
                        inaDistance: computeInaDistance(distance, level),
                    }
                }

                return undefined
            })

            return {
                ...levels,
                [ level ]: levelBoundedSymbolsWithDistance,
            }
        },
        {
            id,
        },
    )
}

const LEVEL_BOUNDED_SYMBOLS: BoundedSymbols[] = BOUNDS.map(computeLevelBoundedSymbols)

export {
    computeLevelBoundedSymbols,
    LEVEL_BOUNDED_SYMBOLS,
}
