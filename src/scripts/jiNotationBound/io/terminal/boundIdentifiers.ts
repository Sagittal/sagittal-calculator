import { computeCentsFromPitch, Maybe } from "../../../../general"
import {
    Ascii,
    getCommaClass,
    getMinaName,
    getRepresentativeSymbol,
    JiNotationBound,
    JiNotationLevel,
} from "../../../../sagittal"
import { computeBoundedCommaClassAnalyses } from "./boundedCommaClassAnalyses"
import { JI_NOTATION_LEVEL_BOUNDED_COMMA_CLASSES } from "./levelBoundedCommaClasses"
import {
    BoundedCommaClass,
    BoundedCommaClassAnalyses,
    BoundedCommaClassIdWithDistancesPair,
    JiNotationBoundIdentifiers,
    JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
} from "./types"

const extractJiNotationBoundIdentifiers = ({ pitch, id }: JiNotationBound): JiNotationBoundIdentifiers => {
    const jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByJiNotationLevel =
        JI_NOTATION_LEVEL_BOUNDED_COMMA_CLASSES.find(
            (
                jiNotationBoundIdWithBoundedCommaClassIdWithDistancesPairsByLevel:
                    JiNotationBoundIdWithBoundedCommaClassIdsWithDistancesPairsByJiNotationLevel,
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
        getRepresentativeSymbol(extremeLevelLesserBoundedCommaClass.id) as string as Ascii :
        "" as Ascii
    const lesserBoundedMinaName = extremeLevelLesserBoundedCommaClass &&
        getMinaName(extremeLevelLesserBoundedCommaClass.id)

    const extremeLevelGreaterBoundedCommaClass: Maybe<BoundedCommaClass> =
        extremeLevelGreaterBoundedCommaClassIdWithDistance && {
            ...extremeLevelGreaterBoundedCommaClassIdWithDistance,
            ...getCommaClass(extremeLevelGreaterBoundedCommaClassIdWithDistance.id),
        } as BoundedCommaClass
    const formattedExtremeLevelGreaterBoundedCommaClass = extremeLevelGreaterBoundedCommaClass ?
        getRepresentativeSymbol(extremeLevelGreaterBoundedCommaClass.id) as string as Ascii :
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
    extractJiNotationBoundIdentifiers,
}
