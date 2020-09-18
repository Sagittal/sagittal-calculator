import { Cents, CentsPosition, Name, Pitch } from "../../../general"
import { JiNotationLevel, SizeCategoryBound } from "../../../sagittal"

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

interface CommaMean extends CentsPosition {
    name: Name<CommaMean>,
}

interface InaMidpoint extends CentsPosition {
    name: Name<InaMidpoint>,
}

type SnappablePosition = InaMidpoint | CommaMean | SizeCategoryBound

export {
    EventType,
    HistoricalEvent,
    History,
    CommaMean,
    InaMidpoint,
    SnappablePosition,
}
