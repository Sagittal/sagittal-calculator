import {computeCentsFromPitch, isUndefined} from "../../../../general"
import {
    Ascii,
    computeSagittalAscii,
    getCommaClass,
    getMinaName,
    getRepresentativeSagittal,
    JiNotationBoundClass,
    JiNotationLevel,
} from "../../../../sagittal"
import {computeBoundedCommaClassInfoPairs} from "./boundedCommaClassInfoPairs"
import {BOUNDED_COMMA_CLASS_ID_PAIRS} from "./levelBoundedCommaClasses"
import {BoundedCommaClassIdPairs, BoundedCommaClassInfoPairs, JiNotationBoundClassIdentifiers} from "./types"

const extractJiNotationBoundClassIdentifiers = (
    {pitch, id}: JiNotationBoundClass,
): JiNotationBoundClassIdentifiers => {
    const boundedCommaClassIdPair = BOUNDED_COMMA_CLASS_ID_PAIRS.find(
        (boundedCommaClassIdPairs: BoundedCommaClassIdPairs): boolean => {
            return boundedCommaClassIdPairs.boundClassId === id
        })
    if (!boundedCommaClassIdPair) throw new Error(`Could not find bounded comma class ID pair for bound with ID ${id}`)

    const boundedCommaClassInfoPairs: BoundedCommaClassInfoPairs =
        computeBoundedCommaClassInfoPairs(boundedCommaClassIdPair)

    const [extremeLevelLesserBoundedCommaClassId, extremeLevelGreaterBoundedCommaClassId] =
        boundedCommaClassIdPair[JiNotationLevel.EXTREME]

    const extremeLevelLesserBoundedCommaClass = !isUndefined(extremeLevelLesserBoundedCommaClassId) &&
        getCommaClass(extremeLevelLesserBoundedCommaClassId)
    const formattedExtremeLevelLesserBoundedCommaClass = extremeLevelLesserBoundedCommaClass ?
        computeSagittalAscii(getRepresentativeSagittal(extremeLevelLesserBoundedCommaClass.id)) :
        "" as Ascii
    const lesserBoundedMinaName =
        extremeLevelLesserBoundedCommaClass ? getMinaName(extremeLevelLesserBoundedCommaClass.id) : undefined

    const extremeLevelGreaterBoundedCommaClass = !isUndefined(extremeLevelGreaterBoundedCommaClassId) &&
        getCommaClass(extremeLevelGreaterBoundedCommaClassId)
    const formattedExtremeLevelGreaterBoundedCommaClass = extremeLevelGreaterBoundedCommaClass ?
        computeSagittalAscii(getRepresentativeSagittal(extremeLevelGreaterBoundedCommaClass.id)) :
        "" as Ascii
    const greaterBoundedMinaName =
        extremeLevelGreaterBoundedCommaClass ? getMinaName(extremeLevelGreaterBoundedCommaClass.id) : undefined

    return {
        extremeLevelLesserBoundedCommaClass: formattedExtremeLevelLesserBoundedCommaClass,
        extremeLevelGreaterBoundedCommaClass: formattedExtremeLevelGreaterBoundedCommaClass,
        cents: computeCentsFromPitch(pitch),
        boundedCommaClassInfoPairs,
        lesserBoundedMinaName,
        greaterBoundedMinaName,
    }
}

export {
    extractJiNotationBoundClassIdentifiers,
}
