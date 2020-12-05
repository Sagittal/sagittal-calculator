import {computeCentsFromPitch, isUndefined} from "@sagittal/general"
import {
    BLANK_ASCII,
    CommaClassId,
    computeSagittalAscii,
    getCommaClass,
    getMinaName,
    getRepresentativeSagittal,
    JiNotationBoundClassEntry,
    JiNotationLevelId,
} from "@sagittal/system"
import {computeBoundedCommaClassInfoPairs} from "./boundedCommaClassInfoPairs"
import {BOUNDED_COMMA_CLASS_ID_PAIRS} from "./levelBoundedCommaClasses"
import {BoundedCommaClassIdPairs, BoundedCommaClassInfoPairs, JiNotationBoundClassIdentifiers} from "./types"

const extractJiNotationBoundClassIdentifiers = (
    [boundClassId, {pitch}]: JiNotationBoundClassEntry,
): JiNotationBoundClassIdentifiers => {
    const boundedCommaClassIdPair = BOUNDED_COMMA_CLASS_ID_PAIRS.find(
        (boundedCommaClassIdPairs: BoundedCommaClassIdPairs): boolean => {
            return boundedCommaClassIdPairs.boundClassId === boundClassId
        })
    if (!boundedCommaClassIdPair) throw new Error(`Could not find bounded comma class ID pair for bound with ID ${boundClassId}`)

    const boundedCommaClassInfoPairs: BoundedCommaClassInfoPairs =
        computeBoundedCommaClassInfoPairs(boundedCommaClassIdPair)

    const [extremeLevelLesserBoundedCommaClassId, extremeLevelGreaterBoundedCommaClassId] =
        boundedCommaClassIdPair[JiNotationLevelId.EXTREME]!

    const extremeLevelLesserBoundedCommaClass = !isUndefined(extremeLevelLesserBoundedCommaClassId) &&
        getCommaClass(extremeLevelLesserBoundedCommaClassId)
    const formattedExtremeLevelLesserBoundedCommaClass = extremeLevelLesserBoundedCommaClass ?
        computeSagittalAscii(getRepresentativeSagittal(extremeLevelLesserBoundedCommaClassId as CommaClassId)) :
        BLANK_ASCII
    const lesserBoundedMinaName = extremeLevelLesserBoundedCommaClass ?
        getMinaName(extremeLevelLesserBoundedCommaClassId as CommaClassId) :
        undefined

    const extremeLevelGreaterBoundedCommaClass = !isUndefined(extremeLevelGreaterBoundedCommaClassId) &&
        getCommaClass(extremeLevelGreaterBoundedCommaClassId)
    const formattedExtremeLevelGreaterBoundedCommaClass = extremeLevelGreaterBoundedCommaClass ?
        computeSagittalAscii(getRepresentativeSagittal(extremeLevelGreaterBoundedCommaClassId as CommaClassId)) :
        BLANK_ASCII
    const greaterBoundedMinaName = extremeLevelGreaterBoundedCommaClass ?
        getMinaName(extremeLevelGreaterBoundedCommaClassId as CommaClassId) :
        undefined

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
