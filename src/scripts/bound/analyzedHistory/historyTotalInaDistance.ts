import { Multiplier, Sum } from "../../../general"
import { Ina } from "../../../sagittal"
import { AnalyzedEvent } from "./analyzeEvents"

const computeHistoryTotalInaDistance = (analyzedEvents: AnalyzedEvent[]): Sum<Multiplier<Ina>> =>
    analyzedEvents.reduce(
        (inaDistance: Sum<Multiplier>, analyzedEvent: AnalyzedEvent) =>
            inaDistance + analyzedEvent.inaDistance as Sum<Multiplier<Ina>>,
        0 as Sum<Multiplier<Ina>>,
    )

export {
    computeHistoryTotalInaDistance,
}
