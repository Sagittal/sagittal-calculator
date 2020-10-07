import { Id, ioSettings, isUndefined, Max, Maybe, Min, Pitch, pitchIsHigher, UNISON, Zone } from "../../../general"
import { formatSymbolClass } from "../../io"
import { getPrimaryComma } from "../primaryComma"
import { PrimaryComma, SymbolClass } from "../types"
import { formatJiNotationLevel } from "./formatLevel"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"
import { isWithinJiNotationLevel } from "./isWithinLevel"
import { JI_NOTATION_LEVELS_BOUNDS } from "./levelsBounds"
import { JiNotationBound, JiNotationLevel } from "./types"

const computeCaptureZone = (
    symbolClassId: Id<SymbolClass>,
    jiNotationLevel: JiNotationLevel = JiNotationLevel.EXTREME,
): Maybe<Zone> => {
    const jiNotationLevelBounds = JI_NOTATION_LEVELS_BOUNDS[ jiNotationLevel ]

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(symbolClassId)
    if (!isWithinJiNotationLevel(introducingJiNotationLevel, jiNotationLevel)) {
        throw new Error(`JI Notation symbol class ${formatSymbolClass(symbolClassId, {
            ...ioSettings,
            align: false,
        })} is not present at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level; it is not introduced until the ${formatJiNotationLevel(introducingJiNotationLevel)} JI notation level.`)
    }

    const primaryComma = getPrimaryComma(symbolClassId)

    const indexOfBoundJustAboveSymbolAtThisLevel = jiNotationLevelBounds
        .findIndex((jiNotationBound: JiNotationBound): boolean => {
            return pitchIsHigher(jiNotationBound.pitch, primaryComma)
        })
    const indexOfJiNotationBoundJustBelowSymbolClassAtThisLevel = indexOfBoundJustAboveSymbolAtThisLevel - 1

    const lowerBound = jiNotationLevelBounds[ indexOfJiNotationBoundJustBelowSymbolClassAtThisLevel ]
    const lowerBoundPitch = isUndefined(lowerBound) ? UNISON : lowerBound.pitch as Pitch as Min<Pitch>
    const upperBoundPitch = jiNotationLevelBounds[ indexOfBoundJustAboveSymbolAtThisLevel ].pitch as Pitch as Max<Pitch>

    return [lowerBoundPitch, upperBoundPitch] as Zone<PrimaryComma>
}

export {
    computeCaptureZone,
}
