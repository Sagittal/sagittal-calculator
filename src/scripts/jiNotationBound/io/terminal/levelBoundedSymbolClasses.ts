import { Abs, abs, Cents, Id, Maybe, subtractPitch } from "../../../../general"
import {
    getPrimaryComma,
    getSymbolClass,
    JiNotationBound,
    JiNotationLevel,
    JI_NOTATION_BOUNDS,
    SymbolClass,
} from "../../../../sagittal"
import { computeBoundedSymbolClassPositions } from "../../boundedPositions"
import { computeInaDistance } from "../../history"
import { computePositionSymbolClassId } from "./positionSymbolClassId"
import {
    BoundedSymbolClassIdWithDistances,
    BoundedSymbolClassIdWithDistancesPair,
    JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const computeJiNotationLevelBoundedSymbolClassIdsWithDistances = (
    { pitch, jiNotationLevels, id }: JiNotationBound,
): JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel =>
    jiNotationLevels.reduce(
        (
            jiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByLevel:
                JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel,
            jiNotationLevel: JiNotationLevel,
        ): JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel => {
            const jiNotationLevelBoundedSymbolClasses: Array<Maybe<SymbolClass>> =
                computeBoundedSymbolClassPositions(pitch, jiNotationLevel)
                    .map(computePositionSymbolClassId)
                    .map((symbolClassId: Maybe<Id<SymbolClass>>): Maybe<SymbolClass> => {
                        return symbolClassId && getSymbolClass(symbolClassId)
                    })
            const jiNotationLevelBoundedSymbolClassesWithDistance = jiNotationLevelBoundedSymbolClasses
                .map(
                    (symbolClass: Maybe<SymbolClass>): Maybe<BoundedSymbolClassIdWithDistances> => {
                        if (symbolClass) {
                            const primaryComma = getPrimaryComma(symbolClass.id)
                            const distance: Abs<Cents> = abs(subtractPitch(pitch, primaryComma))

                            return {
                                id: symbolClass.id,
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

// tslint:disable-next-line max-line-length
const JI_NOTATION_LEVEL_BOUNDED_SYMBOL_CLASSES: JiNotationBoundIdWithBoundedSymbolClassIdsWithDistancesPairsByJiNotationLevel[] =
    JI_NOTATION_BOUNDS.map(computeJiNotationLevelBoundedSymbolClassIdsWithDistances)

export {
    computeJiNotationLevelBoundedSymbolClassIdsWithDistances,
    JI_NOTATION_LEVEL_BOUNDED_SYMBOL_CLASSES,
}
