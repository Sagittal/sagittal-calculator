import { Abs, abs, Cents, Id, Maybe, subtractPitch } from "../../../../general"
import { CommaClass, getCommaClass, JiNotationBound, JiNotationLevel, JI_NOTATION_BOUNDS } from "../../../../sagittal"
import { computeBoundedCommaClassPositions } from "../../boundedPositions"
import { computeInaDistance } from "../../history"
import { computePositionCommaClassId } from "./positionCommaClassId"
import {
    BoundedCommaClassIdWithDistances,
    BoundedCommaClassIdWithDistancesPair,
    JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const computeJiNotationLevelBoundedCommaClassIdsWithDistances = (
    { pitch, jiNotationLevels, id }: JiNotationBound,
): JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel =>
    jiNotationLevels.reduce(
        (
            jiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByLevel:
                JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
            jiNotationLevel: JiNotationLevel,
        ): JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel => {
            const jiNotationLevelBoundedCommaClasses: Array<Maybe<CommaClass>> =
                computeBoundedCommaClassPositions(pitch, jiNotationLevel)
                    .map(computePositionCommaClassId)
                    .map((commaClassId: Maybe<Id<CommaClass>>): Maybe<CommaClass> => {
                        return commaClassId && getCommaClass(commaClassId)
                    })
            const jiNotationLevelBoundedCommaClassesWithDistance = jiNotationLevelBoundedCommaClasses
                .map(
                    (commaClass: Maybe<CommaClass>): Maybe<BoundedCommaClassIdWithDistances> => {
                        if (commaClass) {
                            const distance: Abs<Cents> = abs(subtractPitch(pitch, commaClass))

                            return {
                                id: commaClass.id,
                                distance,
                                inaDistance: computeInaDistance(distance, jiNotationLevel),
                            }
                        }

                        return undefined
                    },
                ) as BoundedCommaClassIdWithDistancesPair

            return {
                ...jiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByLevel,
                [ jiNotationLevel ]: jiNotationLevelBoundedCommaClassesWithDistance,
            }
        },
        {
            id,
        },
    )

// tslint:disable-next-line max-line-length
const JI_NOTATION_LEVEL_BOUNDED_COMMA_CLASSES: JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel[] =
    JI_NOTATION_BOUNDS.map(computeJiNotationLevelBoundedCommaClassIdsWithDistances)

export {
    computeJiNotationLevelBoundedCommaClassIdsWithDistances,
    JI_NOTATION_LEVEL_BOUNDED_COMMA_CLASSES,
}
