import { Id, isScamonGreater, isUndefined, Max, Maybe, Min, Scamon, UNISON, Zone } from "../../../general"
import { formatCommaClass } from "../../io"
import { getCommaClass } from "../commaClass"
import { CommaClass } from "../types"
import { formatJiNotationLevel } from "./formatLevel"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"
import { isWithinJiNotationLevel } from "./isWithinLevel"
import { JI_NOTATION_LEVELS_BOUNDS } from "./levelsBounds"
import { JiNotationBound, JiNotationLevel } from "./types"

const computeCaptureZone = (
    commaClassId: Id<CommaClass>,
    jiNotationLevel: JiNotationLevel = JiNotationLevel.EXTREME,
): Maybe<Zone> => {
    const jiNotationLevelBounds = JI_NOTATION_LEVELS_BOUNDS[ jiNotationLevel ]

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)
    if (!isWithinJiNotationLevel(introducingJiNotationLevel, jiNotationLevel)) {
        throw new Error(`JI Notation comma class ${formatCommaClass(commaClassId, { align: false })} is not present at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level; it is not introduced until the ${formatJiNotationLevel(introducingJiNotationLevel)} JI notation level.`)
    }

    const commaClass = getCommaClass(commaClassId)

    const indexOfBoundJustAboveCommaAtThisLevel = jiNotationLevelBounds
        .findIndex((jiNotationBound: JiNotationBound): boolean => {
            return isScamonGreater(jiNotationBound.pitch, commaClass)
        })
    const indexOfJiNotationBoundJustBelowCommaClassAtThisLevel = indexOfBoundJustAboveCommaAtThisLevel - 1

    const lowerBound = jiNotationLevelBounds[ indexOfJiNotationBoundJustBelowCommaClassAtThisLevel ]
    const lowerBoundPitch = isUndefined(lowerBound) ?
        UNISON :
        lowerBound.pitch as Scamon as Min<Scamon>
    const upperBoundPitch =
        jiNotationLevelBounds[ indexOfBoundJustAboveCommaAtThisLevel ].pitch as Scamon as Max<Scamon>

    return [lowerBoundPitch, upperBoundPitch] as Zone<CommaClass>
}

export {
    computeCaptureZone,
}
