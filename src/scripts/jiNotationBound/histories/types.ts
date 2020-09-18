import { Cents, Name, Pitch } from "../../../general"
import { JiNotationLevel } from "../../../sagittal"

enum EventType {
    INA_MIDPOINT = "inaMidpoint",
    COMMA_MEAN = "commaMean",
    SIZE_CATEGORY_BOUND = "sizeCategoryBound",
}

interface HistoricalEvent {
    jiNotationLevel: JiNotationLevel,
    name: Name<Pitch>,
    cents: Cents,
    type: EventType,
}

type History = HistoricalEvent[]

export {
    EventType,
    HistoricalEvent,
    History,
}
