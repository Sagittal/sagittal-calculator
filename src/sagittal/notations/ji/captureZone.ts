import { computeCentsFromPitch, Id, ioSettings, Maybe, Zone } from "../../../general"
import { formatSymbolClass } from "../../io"
import { getSagittalComma } from "../getSagittalComma"
import { getPrimaryComma } from "../primaryComma"
import { getSymbolClass } from "../symbolClass"
import { SagittalComma, SymbolClass } from "../types"
import { formatJiNotationLevel } from "./formatLevel"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"
import { isWithinJiNotationLevel } from "./isWithinLevel"
import { JI_NOTATION_LEVELS_BOUNDS } from "./levelsBounds"
import { JiNotationBound, JiNotationLevel } from "./types"

const computeCaptureZone = (
    symbolClassId: Id<SymbolClass>,
    jiNotationLevel: JiNotationLevel
): Maybe<Zone> => {
    const jiNotationLevelBounds = JI_NOTATION_LEVELS_BOUNDS[ jiNotationLevel ]

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(symbolClassId)
    if (!isWithinJiNotationLevel(introducingJiNotationLevel, jiNotationLevel)) {
        throw new Error(`JI Notation symbol class ${formatSymbolClass(symbolClassId, {
            ...ioSettings,
            forTable: false,
        })} is not present at the ${formatJiNotationLevel(jiNotationLevel)} JI notation level; it is not introduced until the ${formatJiNotationLevel(introducingJiNotationLevel)} JI notation level.`)
    }

    const primaryComma = getPrimaryComma(symbolClassId)

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
