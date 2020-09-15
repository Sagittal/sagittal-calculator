import { abs, Cents, computeCentsFromPitch, Id, Maybe, subtract } from "../../../../general"
import {
    getJiNotationSymbolClass,
    getSagittalComma,
    JiNotationBound,
    JiNotationLevel,
    JiNotationSymbolClass,
    JI_NOTATION_BOUNDS,
    SymbolClass,
} from "../../../../sagittal"
import { computeBoundedSymbolClassPositions } from "../../boundedPositions"
import { computeInaDistance } from "../../history"
import { computePositionJiNotationSymbolClassId } from "./positionSymbolClassId"
import {
    BoundedSymbolClassIdWithDistances,
    BoundedSymbolClassIdWithDistancesPair,
    JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const computeJiNotationLevelBoundedSymbolClassIdsWithDistances = (
    jiNotationBound: JiNotationBound,
): JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel => {
    const { cents, jiNotationLevels, id } = jiNotationBound

    return jiNotationLevels.reduce(
        (
            jiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByLevel:
                JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
            jiNotationLevel: JiNotationLevel,
        ): JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel => {
            const jiNotationLevelBoundedSymbolClasses: Array<Maybe<JiNotationSymbolClass>> =
                computeBoundedSymbolClassPositions(cents, jiNotationLevel)
                    .map(computePositionJiNotationSymbolClassId)
                    .map((symbolClassId: Maybe<Id<SymbolClass>>): Maybe<JiNotationSymbolClass> => {
                        return symbolClassId && getJiNotationSymbolClass(symbolClassId)
                    })
            const jiNotationLevelBoundedSymbolClassesWithDistance = jiNotationLevelBoundedSymbolClasses
                .map(
                    (jiNotationSymbolClass: Maybe<JiNotationSymbolClass>): Maybe<BoundedSymbolClassIdWithDistances> => {
                        if (jiNotationSymbolClass) {
                            const primaryComma = getSagittalComma(jiNotationSymbolClass.primaryCommaId)
                            const primaryCommaCents = computeCentsFromPitch(primaryComma)
                            const distance: Cents = abs(subtract(cents, primaryCommaCents))

                            return {
                                id: jiNotationSymbolClass.id,
                                distance,
                                inaDistance: computeInaDistance(distance, jiNotationLevel),
                            }
                        }

                        return undefined
                    },
                ) as BoundedSymbolClassIdWithDistancesPair

            return {
                ...jiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByLevel,
                [ jiNotationLevel ]: jiNotationLevelBoundedSymbolClassesWithDistance,
            }
        },
        {
            id,
        },
    )
}

// tslint:disable-next-line max-line-length
const JI_NOTATION_LEVEL_BOUNDED_SYMBOL_CLASSES: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel[] =
    JI_NOTATION_BOUNDS.map(computeJiNotationLevelBoundedSymbolClassIdsWithDistances)

export {
    computeJiNotationLevelBoundedSymbolClassIdsWithDistances,
    JI_NOTATION_LEVEL_BOUNDED_SYMBOL_CLASSES,
}
