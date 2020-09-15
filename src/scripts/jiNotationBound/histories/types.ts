import { Cents, Name, Pitch } from "../../../general"
import { JiNotationLevel } from "../../../sagittal"

enum EventType {
    INA = "ina",
    MEAN = "mean",
    SIZE = "size",
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
