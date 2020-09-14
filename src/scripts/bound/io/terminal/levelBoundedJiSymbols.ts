import { abs, Cents, computeCentsFromPitch, Id, Maybe, subtract } from "../../../../general"
import { Bound, getJiSymbol, getSagittalComma, JiSymbol, JI_BOUNDS, Level } from "../../../../sagittal"
import { computeInaDistance } from "../../analyzeHistory"
import { computeBoundedJiSymbolPositions } from "../../boundedPositions"
import { computePositionJiSymbolId } from "./positionJiSymbolId"
import {
    BoundedSymbolIdWithDistances,
    BoundedSymbolIdWithDistancesPair,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
} from "./types"

const computeLevelBoundedJiSymbolIdWithDistances = (
    bound: Bound,
): BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel => {
    const { cents, levels, id } = bound

    return levels.reduce(
        (
            levels: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
            level: Level,
        ): BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel => {
            const levelBoundedSymbols: Array<Maybe<JiSymbol>> = computeBoundedJiSymbolPositions(cents, level)
                .map(computePositionJiSymbolId)
                .map((jiSymbolId: Maybe<Id<JiSymbol>>): Maybe<JiSymbol> => jiSymbolId && getJiSymbol(jiSymbolId))
            const levelBoundedSymbolsWithDistance = levelBoundedSymbols
                .map((jiSymbol: Maybe<JiSymbol>): Maybe<BoundedSymbolIdWithDistances> => {
                    if (jiSymbol) {
                        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)
                        const primaryCommaCents = computeCentsFromPitch(primaryComma)
                        const distance: Cents = abs(subtract(cents, primaryCommaCents))

                        return {
                            id: jiSymbol.id,
                            distance,
                            inaDistance: computeInaDistance(distance, level),
                        }
                    }

                    return undefined
                }) as BoundedSymbolIdWithDistancesPair

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

const LEVEL_BOUNDED_SYMBOLS: BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel[] =
    JI_BOUNDS.map(computeLevelBoundedJiSymbolIdWithDistances)

export {
    computeLevelBoundedJiSymbolIdWithDistances,
    LEVEL_BOUNDED_SYMBOLS,
}
