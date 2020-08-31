import { Cents, Integer, Multiplier, Rank } from "../../../../general"
import { Ina } from "../../../../sagittal"
import { HistoricalEvent } from "../../histories"

interface AnalyzedEvent extends HistoricalEvent {
    distance: Cents,
    exact: boolean,
    inaDistance: Multiplier<Ina>,
    rank: Rank<AnalyzedEvent, Integer>,
}

export {
    AnalyzedEvent,
}
