import { Cents, Name, Pitch } from "../../../general"
import { Level } from "../../../sagittal"

enum EventType {
    INA = "ina",
    MEAN = "mean",
    SIZE = "size",
}

interface HistoricalEvent {
    level: Level,
    name: Name<Pitch>
    cents: Cents,
    type: EventType,
}

type History = HistoricalEvent[]

export {
    EventType,
    HistoricalEvent,
    History,
}
