import { Cents, Integer, Multiplier, Rank } from "../../../../general"
import { Ina } from "../../../../sagittal"
import { HistoricalEvent } from "../../histories"

interface EventAnalysis extends HistoricalEvent {
    distance: Cents,
    exact: boolean,
    inaDistance: Multiplier<Ina>,
    rank: Integer & Rank<EventAnalysis>,
}

export {
    EventAnalysis,
}
