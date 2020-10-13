import { computeCentsFromPitch, Maybe } from "../../../../general"
import {
    Ascii,
    computeAsciiFromSymbol,
    getCommaClass,
    getMinaName,
    getRepresentativeSymbol,
    JiNotationBoundClass,
    JiNotationLevel,
} from "../../../../sagittal"
import { computeBoundedCommaClassAnalyses } from "./boundedCommaClassAnalyses"
import { JI_NOTATION_LEVEL_BOUNDED_COMMA_CLASSES } from "./levelBoundedCommaClasses"
import {
    BoundedCommaClass,
    BoundedCommaClassAnalyses,
    BoundedCommaClassIdWithDistancesPair,
    JiNotationBoundClassIdentifiers,
    JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const extractJiNotationBoundClassIdentifiers = (
    { pitch, id }: JiNotationBoundClass,
): JiNotationBoundClassIdentifiers => {
    const jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByJiNotationLevel =
        JI_NOTATION_LEVEL_BOUNDED_COMMA_CLASSES.find(
            (
                jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByLevel:
                    JiNotationBoundClassIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
            ): boolean => {
                return jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByLevel.id === id
            })
    if (!jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByJiNotationLevel) {
        throw new Error(`Could not find bounded comma classes for bound with ID ${id}`)
    }

    const boundedCommaClassAnalyses: BoundedCommaClassAnalyses =
        computeBoundedCommaClassAnalyses(jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByJiNotationLevel)

    const [
        extremeLevelLesserBoundedCommaClassIdWithDistance,
        extremeLevelGreaterBoundedCommaClassIdWithDistance,
    ]: BoundedCommaClassIdWithDistancesPair =
        // tslint:disable-next-line max-line-length
        jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByJiNotationLevel[ JiNotationLevel.EXTREME ] as BoundedCommaClassIdWithDistancesPair

    const extremeLevelLesserBoundedCommaClass: Maybe<BoundedCommaClass> =
        extremeLevelLesserBoundedCommaClassIdWithDistance && {
            ...extremeLevelLesserBoundedCommaClassIdWithDistance,
            ...getCommaClass(extremeLevelLesserBoundedCommaClassIdWithDistance.id),
        } as BoundedCommaClass
    const formattedExtremeLevelLesserBoundedCommaClass = extremeLevelLesserBoundedCommaClass ?
        computeAsciiFromSymbol(getRepresentativeSymbol(extremeLevelLesserBoundedCommaClass.id)) :
        "" as Ascii
    const lesserBoundedMinaName = extremeLevelLesserBoundedCommaClass &&
        getMinaName(extremeLevelLesserBoundedCommaClass.id)

    const extremeLevelGreaterBoundedCommaClass: Maybe<BoundedCommaClass> =
        extremeLevelGreaterBoundedCommaClassIdWithDistance && {
            ...extremeLevelGreaterBoundedCommaClassIdWithDistance,
            ...getCommaClass(extremeLevelGreaterBoundedCommaClassIdWithDistance.id),
        } as BoundedCommaClass
    const formattedExtremeLevelGreaterBoundedCommaClass = extremeLevelGreaterBoundedCommaClass ?
        computeAsciiFromSymbol(getRepresentativeSymbol(extremeLevelGreaterBoundedCommaClass.id)) :
        "" as Ascii
    const greaterBoundedMinaName = extremeLevelGreaterBoundedCommaClass &&
        getMinaName(extremeLevelGreaterBoundedCommaClass.id)

    return {
        extremeLevelLesserBoundedCommaClass: formattedExtremeLevelLesserBoundedCommaClass,
        extremeLevelGreaterBoundedCommaClass: formattedExtremeLevelGreaterBoundedCommaClass,
        cents: computeCentsFromPitch(pitch),
        boundedCommaClassAnalyses,
        lesserBoundedMinaName,
        greaterBoundedMinaName,
    }
}

export {
    extractJiNotationBoundClassIdentifiers,
}
