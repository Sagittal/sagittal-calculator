import { Abs, Cents, Integer, Multiplier, Rank } from "../../../../general"
import { Ina } from "../../../../sagittal"
import { EventType, HistoricalEvent } from "../../histories"

interface EventAnalysis extends HistoricalEvent {
    distance: Abs<Cents>,
    exact: boolean,
    inaDistance: Multiplier<Ina>,
    rank: Integer & Rank<EventType>,
}

export {
    EventAnalysis,
}
