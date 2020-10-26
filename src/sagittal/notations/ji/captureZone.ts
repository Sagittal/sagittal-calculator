import {isScamonGreater, isUndefined, Max, Maybe, Min, Scamon, UNISON, Zone} from "../../../general"
import {CommaClass, CommaClassId, formatCommaClass, getCommaClass} from "../../ji"
import {formatJiNotationLevel} from "./formatLevel"
import {getIntroducingJiNotationLevel} from "./introducingJiNotationLevel"
import {isWithinJiNotationLevel} from "./isWithinLevel"
import {JI_NOTATION_LEVELS_BOUND_CLASSES} from "./levelsBoundClasses"
import {JiNotationBoundClass, JiNotationLevel} from "./types"

const computeJiNotationCaptureZone = (
    commaClassId: CommaClassId,
    jiNotationLevel: JiNotationLevel = JiNotationLevel.EXTREME,
): Maybe<Zone> => {
    const jiNotationLevelBoundClasses = JI_NOTATION_LEVELS_BOUND_CLASSES[jiNotationLevel]

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)
    if (!isWithinJiNotationLevel(introducingJiNotationLevel, jiNotationLevel)) {
        throw new Error(`JI Notation comma class ${formatCommaClass(commaClassId, {align: false})} is not present at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level; it is not introduced until the ${formatJiNotationLevel(introducingJiNotationLevel)} JI notation level.`)
    }

    const commaClass = getCommaClass(commaClassId)

    const indexOfBoundClassJustAboveCommaAtThisLevel = jiNotationLevelBoundClasses
        .findIndex((jiNotationBoundClass: JiNotationBoundClass): boolean => {
            return isScamonGreater(jiNotationBoundClass.pitch, commaClass.pitch)
        })
    const indexOfJiNotationBoundJustBelowCommaClassAtThisLevel = indexOfBoundClassJustAboveCommaAtThisLevel - 1

    const lowerBoundClass = jiNotationLevelBoundClasses[indexOfJiNotationBoundJustBelowCommaClassAtThisLevel]
    const lowerBoundClassPitch = isUndefined(lowerBoundClass) ?
        UNISON :
        lowerBoundClass.pitch as Scamon as Min<Scamon>
    const upperBoundClassPitch =
        jiNotationLevelBoundClasses[indexOfBoundClassJustAboveCommaAtThisLevel].pitch as Scamon as Max<Scamon>

    return [lowerBoundClassPitch, upperBoundClassPitch] as Zone<CommaClass>
}

export {
    computeJiNotationCaptureZone,
}
