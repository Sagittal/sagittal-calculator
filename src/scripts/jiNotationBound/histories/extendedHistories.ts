import { computeExtensionBase, ExtensionBaseType } from "../../../general"
import { JiNotationBound, JiNotationLevel } from "../../../sagittal"
import { BoundedSymbolClassPositions, computeBoundedSymbolClassPositions } from "../boundedPositions"
import { computeEvents } from "./events"
import { EventType, HistoricalEvent, History } from "./types"

const computeExtendedHistories = (
    history: History,
    jiNotationLevel: JiNotationLevel,
    jiNotationBound: JiNotationBound,
): History[] => {
    const extendedHistories: History[] = computeExtensionBase(ExtensionBaseType.ARRAY) as History[]

    const boundedSymbolClassPositions: BoundedSymbolClassPositions =
        computeBoundedSymbolClassPositions(jiNotationBound.cents, jiNotationLevel)

    const newEvents = [
        ...computeEvents(jiNotationLevel, boundedSymbolClassPositions, EventType.INA_MIDPOINT),
        ...computeEvents(jiNotationLevel, boundedSymbolClassPositions, EventType.COMMA_MEAN),
        ...computeEvents(jiNotationLevel, boundedSymbolClassPositions, EventType.SIZE_CATEGORY_BOUND),
    ]

    newEvents.forEach((event: HistoricalEvent): void => {
        const extendedHistory: History = history.concat(event)
        extendedHistories.push(extendedHistory)
    })

    return extendedHistories
}

export {
    computeExtendedHistories,
}
