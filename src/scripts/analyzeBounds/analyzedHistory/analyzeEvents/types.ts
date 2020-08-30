import { Cents, Integer, Proportion, Rank } from "../../../../general"
import { HistoricalEvent } from "../../histories"

interface AnalyzedEvent extends HistoricalEvent {
    distance: Cents,
    exact: boolean,
    inaDistance: Proportion,
    rank: Rank<AnalyzedEvent, Integer>,
}

export {
    AnalyzedEvent,
}
