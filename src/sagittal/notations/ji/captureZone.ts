import { computeCentsFromPitch, ioSettings, Maybe, Zone } from "../../../general"
import { formatSymbolClass } from "../../io"
import { getSagittalComma } from "../getSagittalComma"
import { SagittalComma } from "../types"
import { formatJiNotationLevel } from "./formatLevel"
import { computeIntroducingJiNotationLevel } from "./introducingJiNotationLevel"
import { isWithinJiNotationLevel } from "./isWithinLevel"
import { JI_NOTATION_LEVELS_BOUNDS } from "./levelsBounds"
import { JiNotationBound, JiNotationLevel, JiNotationSymbolClass } from "./types"

const computeCaptureZone = (
    jiNotationSymbolClass: JiNotationSymbolClass,
    jiNotationLevel: JiNotationLevel
): Maybe<Zone> => {
    const jiNotationLevelBounds = JI_NOTATION_LEVELS_BOUNDS[ jiNotationLevel ]

    const introducingJiNotationLevel = computeIntroducingJiNotationLevel(jiNotationSymbolClass.id)
    if (!isWithinJiNotationLevel(introducingJiNotationLevel, jiNotationLevel)) {
        throw new Error(`JI Notation symbol class ${formatSymbolClass(jiNotationSymbolClass.id, {
            ...ioSettings,
            forTable: false,
        })} is not present at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level; it is not introduced until the ${formatJiNotationLevel(introducingJiNotationLevel)} JI notation level.`)
    }

    const primaryComma = getSagittalComma(jiNotationSymbolClass.primaryCommaId)

    const indexOfBoundJustAboveSymbolAtThisLevel = jiNotationLevelBounds
        .findIndex((jiNotationBound: JiNotationBound): boolean => {
            return jiNotationBound.cents > computeCentsFromPitch(primaryComma)
        })
    const indexOfJiNotationBoundJustBelowSymbolClassAtThisLevel = indexOfBoundJustAboveSymbolAtThisLevel - 1

    const minCents = jiNotationLevelBounds[ indexOfJiNotationBoundJustBelowSymbolClassAtThisLevel ]?.cents || 0
    const maxCents = jiNotationLevelBounds[ indexOfBoundJustAboveSymbolAtThisLevel ].cents

    return [minCents, maxCents] as Zone<SagittalComma>
}

export {
    computeCaptureZone,
}
